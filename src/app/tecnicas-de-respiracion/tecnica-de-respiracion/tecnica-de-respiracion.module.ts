import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicaDeRespiracionPageRoutingModule } from './tecnica-de-respiracion-routing.module';

import { TecnicaDeRespiracionPage } from './tecnica-de-respiracion.page';
import { TecnicaSlidesPage } from './tecnica-slides/tecnica-slides.page';
import { TecnicaUnoSlidesComponent } from './tecnica-uno-slides/tecnica-uno-slides.component';
import { TecnicaDosSlidesComponent } from './tecnica-dos-slides/tecnica-dos-slides.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicaDeRespiracionPageRoutingModule,
  ],
  declarations: [
    TecnicaDeRespiracionPage,
    TecnicaSlidesPage,
    TecnicaUnoSlidesComponent,
    TecnicaDosSlidesComponent,
  ],
})
export class TecnicaDeRespiracionPageModule {}
