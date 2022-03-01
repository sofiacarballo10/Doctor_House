import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor} from "../models/doctor.model";

export abstract class ResourceService<T> {
  protected apiURL: string;

  constructor(protected httpClient: HttpClient) { }

  getAll(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.apiURL}`);
  }

  update(doctor: Doctor): Observable<Doctor> {
    return  this.httpClient.put<Doctor>(`${this.apiURL}/${doctor.id}`, doctor);
  }

  delete(id): Observable<boolean> {
    return  this.httpClient.delete<boolean>(`${this.apiURL}/${id}`);
  }
}
