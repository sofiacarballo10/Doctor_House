import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import {Doctor} from '../../models/doctor.model';
import {DoctorService} from '../../services/doctor.service';


@Component({
  selector: 'app-doctor-explorer-detail',
  templateUrl: './doctor-explorer-detail.component.html',
  styleUrls: ['./doctor-explorer-detail.component.scss'],
})
export class DoctorExplorerDetailComponent implements OnInit {
  doctors: Doctor[] = [];
  doctor: Doctor;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.getAllStreamMode()
      .subscribe((res: Doctor) => {
        //Add new doctor to the list when it is received from the stream
        this.doctors.push(res);
      });
  }

  onClickAddFavorite(doctor) {
    doctor.favorite = !doctor.favorite;
    this.doctorService.update(doctor);
  }
}
