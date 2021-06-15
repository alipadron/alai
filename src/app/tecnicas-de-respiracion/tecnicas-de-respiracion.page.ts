import { Component, OnInit } from '@angular/core';
import { TecnicaDeRespiracion } from './tecnica-de-respiracion.interface';
import { TECNICAS_DE_RESPIRACION } from './tecnicas-de-respiracion';

@Component({
  selector: 'app-tecnicas-de-respiracion',
  templateUrl: './tecnicas-de-respiracion.page.html',
})
export class TecnicasDeRespiracionPage implements OnInit {
  tecnicasdeRespiracion: TecnicaDeRespiracion[] = TECNICAS_DE_RESPIRACION;

  constructor() { }

  ngOnInit() {
  }

}
