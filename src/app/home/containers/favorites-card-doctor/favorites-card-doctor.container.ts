import { Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {Doctor} from '../../../models/doctor.model';
import {map} from 'rxjs/operators';
import {Pageable} from '../../../services/pageable.model';

@Component({
  selector: 'app-favorites-card-doctor',
  templateUrl: './favorites-card-doctor.container.html',
  styleUrls: ['./favorites-card-doctor.container.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FavoritesCardDoctorContainer implements OnInit {
  doctors: Doctor[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
      this.doctorService.getAll()
        .pipe(map((data: Pageable<Doctor>) => data.content))
        .subscribe((res: Doctor[]) => {
          this.doctors = res;
        });
  }
}
