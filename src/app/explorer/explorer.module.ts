import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorerPageRoutingModule } from './explorer-routing.module';

import { ExplorerPage } from './explorer.page';
import { DoctorExplorerDetailComponent } from './doctor-explorer-detail/doctor-explorer-detail.component';
import { SharedPageModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorerPageRoutingModule,
    SharedPageModule,
  ],
  declarations: [
    ExplorerPage,
    DoctorExplorerDetailComponent
  ],
})
export class ExplorerPageModule {}
