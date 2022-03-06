import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import {FavoritesCardDoctorContainer} from './containers/favorites-card-doctor/favorites-card-doctor.container';
import {FavoritesDoctorsComponent} from './components/favorites-doctors/favorites-doctors.component';

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

  ]
})
export class HomePageModule {}
