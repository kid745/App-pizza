import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToppingPageRoutingModule } from './topping-routing.module';

import { ToppingPage } from './topping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToppingPageRoutingModule
  ],
  declarations: [ToppingPage]
})
export class ToppingPageModule {}
