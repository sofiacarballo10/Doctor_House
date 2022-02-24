import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car.model';
import { ResourceService } from './resource.service';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class CarService extends ResourceService<Car> {
  protected apiURL = `${environment.baseApiUrl}/cars.data.json`;



  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
getCars(){
return this.httpClient.get('assets/data/cars.data.json').pipe(map((res: any) => res.data));
}



}
