import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor.model';
import { ResourceService } from './resource.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DoctorService extends ResourceService<Doctor> {
  protected apiURL = `${environment.baseApiUrl}/doctors`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getById(id: number) {
    return this.getAll().pipe(
      map((resourceData: Doctor[]) =>
        resourceData.find((doctor: Doctor) =>
          doctor.id === id))
    );
  }
}
