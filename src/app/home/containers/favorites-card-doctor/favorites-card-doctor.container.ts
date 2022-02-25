import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {ResourceList} from '../../../models/resource-list.model';
import {Doctor} from '../../../models/doctor.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-favorites-card-doctor',
  templateUrl: './favorites-card-doctor.container.html',
  styleUrls: ['./favorites-card-doctor.container.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FavoritesCardDoctorContainer implements OnInit {
  doctors: Doctor[];
  doctor: any;
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getAll().pipe(map((res: ResourceList<Doctor>) => res.data))
      .subscribe((res: Doctor[]) => {
        this.doctors = res;
      });
  }

}
