import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'size',
    loadChildren: () => import('./size/size.module').then( m => m.SizePageModule)
  },
  {
    path: 'topping',
    loadChildren: () => import('./topping/topping.module').then( m => m.ToppingPageModule)
  },
  {
    path: 'assortments',
    loadChildren: () => import('./assortments/assortments.module').then( m => m.AssortmentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
