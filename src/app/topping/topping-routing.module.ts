import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToppingPage } from './topping.page';
import { HomePage } from '../home/home.page';
const routes: Routes = [
  {
    path: '',
    component: ToppingPage
  },
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToppingPageRoutingModule {}
