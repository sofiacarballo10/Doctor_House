import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand.model';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class BranService extends ResourceService<Brand> {
  protected apiURL = `${environment.baseApiUrl}/cars.data.json`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}
