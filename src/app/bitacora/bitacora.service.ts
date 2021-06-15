import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { Observable, of } from 'rxjs';
import { Nota } from './nota.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable({ providedIn: 'root' })
export class BitacoraService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

  private get notas(): Nota[] {
    return JSON.parse(this.localStorage.getItem('notas')) || [];
  }

  private set notas(notas: Nota[]) {
    this.localStorage.setItem('notas', JSON.stringify(notas));
  }

  obtenerNotas(): Observable<Nota[]> {
    return of(this.notas);
  }

  obtenerNota(id: string): Observable<Nota> {
    if (id === 'nueva') {
      return of({
        titulo: '',
        id: '',
        contenido: '',
        fecha: null,
      });
    }
    return of(this.notas.find((n) => n.id === id));
  }

  agregarNota(nota: Nota): Observable<Nota> {
    const notas: Nota[] = this.notas;
    nota.id = uuidv4();
    nota.fecha = Date.now();
    notas.unshift(nota);
    this.notas = notas;

    return of({ ...nota });
  }

  eliminarNota(id: string): Observable<boolean> {
    const notas: Nota[] = this.notas;
    this.notas = notas.filter((nota) => nota.id !== id);
    return of(true);
  }

  editarNota(id: string, nota: Nota): Observable<Nota> {
    const notas: Nota[] = this.notas;
    this.notas = notas.map((n) => (n.id === id ? { ...n, ...nota } : n));
    return of(nota);
  }
}
