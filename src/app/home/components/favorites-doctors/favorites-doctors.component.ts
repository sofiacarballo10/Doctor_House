import { Component, Input } from '@angular/core';

import { Doctor } from '../../../models/doctor.model';
import {DoctorService} from '../../../services/doctor.service';

@Component({
  selector: 'app-favorite-doctor',
  templateUrl: './favorites-doctors.component.html',
  styleUrls: ['./favorites-doctors.component.scss'],
})
export class FavoritesDoctorsComponent {
  @Input() doctor: Doctor;
  doctors: Doctor[];

  constructor(private doctorService: DoctorService) { }

  onClickDeleteFromFavorite(doctor){
    doctor.favorite= false;
  this.doctorService.update(doctor);
  }
}
