import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import {FavoriteCarDetailComponent} from './components/favorites-doctors/favorites-doctors.component';
import {FavoritesCardDoctorContainer} from './containers/favorites-card-doctor/favorites-card-doctor.container';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [
    HomePage,
    FavoriteCarDetailComponent,
    FavoritesCardDoctorContainer,

  ]
})
export class HomePageModule {}
