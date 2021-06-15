import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinamicasPageRoutingModule } from './dinamicas-routing.module';

import { DinamicasPage } from './dinamicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinamicasPageRoutingModule
  ],
  declarations: [DinamicasPage]
})
export class DinamicasPageModule {}
