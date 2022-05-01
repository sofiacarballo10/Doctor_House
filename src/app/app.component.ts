import { Component } from '@angular/core';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.addCustomIcons();
  }
  addCustomIcons(): void {
    addIcons({
      bell: 'assets/icons/bell.icon.svg'
    });
  }
}