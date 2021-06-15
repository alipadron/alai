import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicasDeRespiracionPage } from './tecnicas-de-respiracion.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicasDeRespiracionPage
  },
  {
    path: ':tecnicaId',
    loadChildren: () => import('./tecnica-de-respiracion/tecnica-de-respiracion.module').then( m => m.TecnicaDeRespiracionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicasDeRespiracionPageRoutingModule {}
