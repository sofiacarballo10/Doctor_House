import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() image!: {
    src: string;
    altText: string;
    type: 'thumbnail' | 'avatar';
  };
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() detail = false;
  constructor() { }

  ngOnInit() {}

}
