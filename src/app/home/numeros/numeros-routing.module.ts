import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumerosPage } from './numeros.page';

const routes: Routes = [
  {
    path: '',
    component: NumerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumerosPageRoutingModule {}
