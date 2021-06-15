import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicaDeRespiracionPage } from './tecnica-de-respiracion.page';
import { TecnicaSlidesPage } from './tecnica-slides/tecnica-slides.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicaDeRespiracionPage
  },
  {
    path: 'slides',
    component: TecnicaSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicaDeRespiracionPageRoutingModule {}
