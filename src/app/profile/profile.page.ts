import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../models/doctor.model';
import {DoctorService} from '../services/doctor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  doctor!: Doctor | undefined;
  doctorId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private doctorService: DoctorService,
  ) { }

  ngOnInit() {
    this.doctorId = +this.activatedRoute.snapshot.params.id;
    this.doctorService.getById(this.doctorId)
      .subscribe((res: Doctor | undefined)=> {
        this.doctor = res;
      });
  }

}
