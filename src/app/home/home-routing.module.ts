import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage, children: [
      {
        path: 'colores',
        loadChildren: () => import('./colores/colores.module').then( m => m.ColoresPageModule)
      },{
        path: 'animales',
        loadChildren: () => import('./animales/animales.module').then( m => m.AnimalesPageModule)
      },
      {
        path: 'numeros',
        loadChildren: () => import('./numeros/numeros.module').then( m => m.NumerosPageModule)
      },]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
