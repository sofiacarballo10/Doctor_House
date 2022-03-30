import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicHeaderComponent } from './basic-header/basic-header.component'
import { ItemComponent } from './item/item.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    BasicHeaderComponent,
    ItemComponent,
    SectionComponent,
  ],
  declarations: [BasicHeaderComponent, ItemComponent, SectionComponent]
})
export class SharedPageModule {}
