import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssortmentsPageRoutingModule } from './assortments-routing.module';

import { AssortmentsPage } from './assortments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssortmentsPageRoutingModule
  ],
  declarations: [AssortmentsPage]
})
export class AssortmentsPageModule {}
