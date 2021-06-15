import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicasDeRespiracionPageRoutingModule } from './tecnicas-de-respiracion-routing.module';

import { TecnicasDeRespiracionPage } from './tecnicas-de-respiracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicasDeRespiracionPageRoutingModule
  ],
  declarations: [TecnicasDeRespiracionPage]
})
export class TecnicasDeRespiracionPageModule {}
