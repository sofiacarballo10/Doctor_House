import { Component, OnInit } from '@angular/core';

import { Doctor } from '../../models/doctor.model';
import { DoctorService } from '../../services/doctor.service';
import {map} from "rxjs/operators";
import {Pageable} from "../../services/pageable.model";


@Component({
  selector: 'app-doctor-explorer-detail',
  templateUrl: './doctor-explorer-detail.component.html',
  styleUrls: ['./doctor-explorer-detail.component.scss'],
})
export class DoctorExplorerDetailComponent implements OnInit {
  doctors: Doctor[];
  doctor: Doctor;

  get mainImage(): string {
    return `url(${this.doctor?.mainImage})`;
  }

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.getAll()
      .pipe(map((data: Pageable<Doctor>) => data.content))
      .subscribe((res: Doctor[]) => {
        this.doctors = res;
      });
  }

  onClickAddFavorite(doctor) {
    doctor.favorite = !doctor.favorite;
    this.doctorService.update(doctor)
      .subscribe((response: Doctor) => response);
  }
}
