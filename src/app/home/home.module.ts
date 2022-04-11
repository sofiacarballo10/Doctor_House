import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import {FavoritesCardDoctorContainer} from './containers/favorites-card-doctor/favorites-card-doctor.container';
import {FavoritesDoctorsComponent} from './components/favorites-doctors/favorites-doctors.component';
import { SpecialtyComponent } from './components/specialty/specialty.component';
import { SpecialtyContainer } from './containers/specialty/specialty.container';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [
    HomePage,
    FavoritesCardDoctorContainer,
    FavoritesDoctorsComponent,
    SpecialtyComponent,
    SpecialtyContainer

  ]
})
export class HomePageModule {}
