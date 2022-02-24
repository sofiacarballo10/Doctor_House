import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registration1PageRoutingModule } from './registration1-routing.module';

import { Registration1Page } from './registration1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registration1PageRoutingModule
  ],
  declarations: [Registration1Page]
})
export class Registration1PageModule {}
