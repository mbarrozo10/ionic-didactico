import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalesPage } from './animales.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalesPageRoutingModule {}
