import { Component, OnInit, Input } from '@angular/core';
import {Doctor} from '../../../models/doctor.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  @Input() doctor!: Doctor;
  isReadMore = true;
  constructor() { }

  ngOnInit() {}

}
