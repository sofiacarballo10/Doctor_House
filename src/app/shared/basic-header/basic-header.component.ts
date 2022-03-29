import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss'],
})
export class BasicHeaderComponent implements OnInit {
  @Input() title!: string;
  constructor() { }

  ngOnInit() {}

}
