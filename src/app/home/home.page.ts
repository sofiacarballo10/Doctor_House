import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import{ CarService } from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  cars: any[];
  constructor(private carService: CarService) {}

ngOnInit(): void{
  this.carService.getCars().subscribe(res=>{this.cars=res;  console.log(this.cars);});
}
}
