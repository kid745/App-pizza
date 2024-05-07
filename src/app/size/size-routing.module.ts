import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SizePage } from './size.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: SizePage
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
export class SizePageRoutingModule {}
