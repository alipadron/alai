import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dinamica } from '../dinamica.interface';
import { map } from 'rxjs/operators';
import { DINAMICAS } from '../dinamicas';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dinamica',
  templateUrl: './dinamica.page.html',
})
export class DinamicaPage implements OnInit {
  dinamica$: Observable<Dinamica> = this.route.paramMap.pipe(
    map((paramMap) => parseInt(paramMap.get('dinamicaId'))),
    map((dinamicaId) => DINAMICAS.find(({ id }) => id === dinamicaId))
  );
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
