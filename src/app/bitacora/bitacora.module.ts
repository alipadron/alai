import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitacoraPageRoutingModule } from './bitacora-routing.module';

import { BitacoraPage } from './bitacora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BitacoraPageRoutingModule,
  ],
  declarations: [BitacoraPage]
})
export class BitacoraPageModule {}
