import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TecnicaDeRespiracion } from '../tecnica-de-respiracion.interface';
import { TECNICAS_DE_RESPIRACION } from '../tecnicas-de-respiracion';

@Component({
  selector: 'app-tecnica-de-respiracion',
  templateUrl: './tecnica-de-respiracion.page.html',
})
export class TecnicaDeRespiracionPage implements OnInit {
  tecnica$: Observable<TecnicaDeRespiracion> = this.route.paramMap.pipe(
    map((paramMap) => parseInt(paramMap.get('tecnicaId'))),
    map((tecnicaId) => TECNICAS_DE_RESPIRACION.find(({ id }) => id === tecnicaId))
  );
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }
}
