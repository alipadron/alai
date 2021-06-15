import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinamicaPageRoutingModule } from './dinamica-routing.module';

import { DinamicaPage } from './dinamica.page';
import { DinamicaUnoComponent } from './dinamica-uno/dinamica-uno.component';
import { DinamicaDosComponent } from './dinamica-dos/dinamica-dos.component';
import { DinamicaTresComponent } from './dinamica-tres/dinamica-tres.component';
import { DinamicaCuatroComponent } from './dinamica-cuatro/dinamica-cuatro.component';
import { DinamicaCincoComponent } from './dinamica-cinco/dinamica-cinco.component';
import { DinamicaSeisComponent } from './dinamica-seis/dinamica-seis.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DinamicaPageRoutingModule],
  declarations: [
    DinamicaPage,
    DinamicaUnoComponent,
    DinamicaDosComponent,
    DinamicaTresComponent,
    DinamicaCuatroComponent,
    DinamicaCincoComponent,
    DinamicaSeisComponent,
  ],
})
export class DinamicaPageModule {}
