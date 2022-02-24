import { Component, OnInit } from '@angular/core';
import{ CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-detail-card',
  templateUrl: './car-detail-card.component.html',
  styleUrls: ['./car-detail-card.component.scss'],
})
export class CarDetailCardComponent implements OnInit {
  cars: any[];
  constructor(private carService: CarService) {}

ngOnInit(): void{
  this.carService.getCars().subscribe(res=>{this.cars=res;  console.log(this.cars);});
}
}
