import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { InformationComponent } from './components/information/information.component';
import { SharedPageModule } from '../shared/shared.module';
import { PlacesComponent } from './components/places/places.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    SharedPageModule,
  ],
  declarations: [
    ProfilePage,
    InformationComponent,
    PlacesComponent,
  ]
})
export class ProfilePageModule {}
