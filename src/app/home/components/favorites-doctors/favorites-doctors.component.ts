import { Component, OnInit, Input } from '@angular/core';

import { Doctor } from '../../../models/doctor.model';
@Component({
  selector: 'app-favorite-doctor',
  templateUrl: './favorites-doctors.component.html',
  styleUrls: ['./favorites-doctors.component.scss'],
})
export class FavoriteCarDetailComponent {
  @Input() doctor: Doctor;
}
