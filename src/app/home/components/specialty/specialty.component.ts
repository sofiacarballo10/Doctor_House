import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.scss'],
})
export class SpecialtyComponent implements OnInit {
  specialtys: [{ name: string; icon: string }, { name: string; icon: string }, { name: string; icon: string }] = [
    {
      name: 'Clínico',
      icon: 'accessibility-outline'
    },
    { name: 'oftalmología', 
    icon: 'accessibility-outline'},
    { name: 'Radiología', 
    icon: 'accessibility-outline'}
  ];
  constructor() {}

  ngOnInit() {}
}
