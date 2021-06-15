import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitacoraPage } from './bitacora.page';

const routes: Routes = [
  {
    path: '',
    component: BitacoraPage
  },
  {
    path: ':notaId',
    loadChildren: () => import('./nota/nota.module').then( m => m.NotaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitacoraPageRoutingModule {}
