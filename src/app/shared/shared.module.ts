import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BasicHeaderComponent } from './basic-header/basic-header.component';
import { ItemComponent } from './item/item.component';
import { SectionComponent } from './section/section.component';
import { SafeStylesPipe } from './pipes/safe-styles.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  exports: [BasicHeaderComponent, ItemComponent, SectionComponent, SafeStylesPipe],
  declarations: [BasicHeaderComponent, ItemComponent, SectionComponent, SafeStylesPipe],
})
export class SharedPageModule {}
