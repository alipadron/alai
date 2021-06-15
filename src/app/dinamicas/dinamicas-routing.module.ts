import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinamicasPage } from './dinamicas.page';

const routes: Routes = [
  {
    path: '',
    component: DinamicasPage
  },
  {
    path: ':dinamicaId',
    loadChildren: () => import('./dinamica/dinamica.module').then( m => m.DinamicaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinamicasPageRoutingModule {}
