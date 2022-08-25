import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor} from '../models/doctor.model';
import {Pageable} from './pageable.model';

export abstract class ResourceService<T> {
  protected apiURL: string;

  constructor(protected httpClient: HttpClient) { }

  getAll(): Observable<Pageable<T>> {
    const data =  this.httpClient.get<Pageable<T>>(`${this.apiURL}`);
    return data;
  }

  update(doctor: Doctor): Observable<Doctor> {
    return  this.httpClient.put<Doctor>(`${this.apiURL}/${doctor.id}`, doctor);
  }

  delete(id): Observable<boolean> {
    return  this.httpClient.delete<boolean>(`${this.apiURL}/${id}`);
  }
}
