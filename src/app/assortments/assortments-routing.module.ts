import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssortmentsPage } from './assortments.page';
import { HomePage } from '../home/home.page';
const routes: Routes = [
  {
    path: '',
    component: AssortmentsPage
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
export class AssortmentsPageRoutingModule {}
