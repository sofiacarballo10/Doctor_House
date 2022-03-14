import { Component, OnInit } from '@angular/core';

import{ DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(private doctorService: DoctorService) {}

ngOnInit(): void{
}

}
