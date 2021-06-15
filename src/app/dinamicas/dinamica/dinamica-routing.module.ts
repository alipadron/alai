import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinamicaPage } from './dinamica.page';

const routes: Routes = [
  {
    path: '',
    component: DinamicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinamicaPageRoutingModule {}
