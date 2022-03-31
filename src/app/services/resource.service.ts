import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor} from '../models/doctor.model';

//https://medium.com/@vijitsh/asynchronous-sse-server-sent-events-in-spring-d9e5e0ec94f6
export abstract class ResourceService<T> {
  protected apiURL: string;

  constructor(protected httpClient: HttpClient) { }

  getAll(): Observable<Doctor[]> {
    const data =  this.httpClient.get<Doctor[]>(`${this.apiURL}`);
    return data;
  }

  //Objects will be received one by one and send to the subscriber
  getAllStreamMode(): Observable<Doctor> {
    return new Observable(observer => {
      const eventSource = new EventSource(`${this.apiURL}/stream`);
      eventSource.onopen = (ev) => {
        console.log('Connection to server opened.', ev);
      };
      //Close the connection if a error occurs
      /* event is ‘error’, this will be called whenever there is an network error and also when server closes
        the connection by calling a ‘complete’ or ‘completeWithError’ method on emitter.
       */
      eventSource.onerror = (ev) => {
        if (eventSource.readyState === EventSource.CLOSED) {
          console.log('Connection is closed');
        } else {
          console.log('Error occured', ev);
        }
        eventSource.close();
      };
      //Send data to the subscriber
      eventSource.addEventListener('message', event => {
        //Important: parse to JSON
        observer.next(JSON.parse(event.data));
      });
    });
  }

  update(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.put<Doctor>(`${this.apiURL}/${doctor.id}`, doctor);
  }

  delete(id): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.apiURL}/${id}`);
  }
}
