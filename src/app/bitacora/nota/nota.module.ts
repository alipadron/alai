import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotaPageRoutingModule } from './nota-routing.module';

import { NotaPage } from './nota.page';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NotaPageRoutingModule,
    ContenteditableValueAccessorModule,
    SharedModule,
  ],
  declarations: [NotaPage],
})
export class NotaPageModule {}
