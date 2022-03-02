import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../models/doctor.model';
import {DoctorService} from '../../services/doctor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-explorer-detail',
  templateUrl: './doctor-explorer-detail.component.html',
  styleUrls: ['./doctor-explorer-detail.component.scss'],
})
export class DoctorExplorerDetailComponent implements OnInit {
  doctors: Doctor[];
  private res: Doctor[];

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit() {

    this.doctorService.getAll()
      .subscribe((res: Doctor[]) => {
        this.doctors = res;
      });
  }
}