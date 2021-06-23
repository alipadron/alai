import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, startWith, switchMap, switchMapTo, tap } from 'rxjs/operators';
import { BitacoraService } from './bitacora.service';
import { Nota } from './nota.interface';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.page.html',
})
export class BitacoraPage {
  notas$: Observable<Nota[]>;

  searchTerm: FormControl = new FormControl();

  constructor(private bitacoraService: BitacoraService) {}

  ionViewWillEnter() {
    this.notas$ = this.searchTerm.valueChanges.pipe(
      startWith(''),
      switchMap((term: string | null) => {
        term = (term || '').toLocaleLowerCase();
        return this.bitacoraService
          .obtenerNotas()
          .pipe(
            map((notas) =>
              notas.filter(
                (nota) =>
                  nota.contenido.toLocaleLowerCase().includes(term) ||
                  nota.titulo.toLocaleLowerCase().includes(term)
              )
            )
          );
      })
    );
  }

  eliminarNota(notaId: string): void {
    this.bitacoraService
      .eliminarNota(notaId)
      .subscribe(() => this.searchTerm.setValue(''));
  }
}
