import { Component, OnInit } from '@angular/core';

import{ DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  scrolled = false;

  constructor(private doctorService: DoctorService) {}

ngOnInit(): void{
}
onScroll({ detail }: CustomEvent) {
  if (detail.scrollTop > 56 && !this.scrolled) {
    this.scrolled = true;
  } else if (detail.scrollTop < 56 && this.scrolled) {
    this.scrolled = false;
  }
}

}
