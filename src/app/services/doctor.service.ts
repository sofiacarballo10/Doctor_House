import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor.model';
import { ResourceService } from './resource.service';


@Injectable({
  providedIn: 'root',
})
export class DoctorService extends ResourceService<Doctor> {
  protected apiURL = `${environment.baseApiUrl}/doctors`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
