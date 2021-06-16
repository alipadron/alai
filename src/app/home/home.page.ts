import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  items = [
    {
      titulo: 'Dinámicas',
      descripcion:
        'Las dinámicas son actividades que tienen como prioridad centrarse en las personas participantes como individuos para ayudar a controlar ciertas situaciones implementando las habilidades para la vida.',
      url: '/dinamicas',
      color: 'primary',
      imagen: 'assets/images/dinamicas.jpg',
    },
    {
      titulo: 'Técnicas de respiración',
      descripcion:
        'Las técnicas de respiración son una serie de pasos que te permiten respirar con cierto orden y sentido, de manera que te permita relajarte y en tal caso, parar un ataque de pánico.',
      url: '/tecnicas-de-respiracion',
      color: 'secondary',
      imagen: 'assets/images/tecnicas-de-respiracion.jpg',
    },
    {
      titulo: 'Bitacora',
      descripcion:
        'Una bitácora es una serie de anotaciones en las que recopilas detalles importantes y acotaciones de tu progreso.',
      url: '/bitacora',
      color: 'tertiary',
      imagen: 'assets/images/bitacora.jpg',
    },
    {
      titulo: 'Música',
      descripcion:
        'La música puede jugar un papel importante en el cuidado de nosotros mismos, no solo como entretenimiento, sino también como herramienta terapéutica para el manejo del estrés. La música nos permite relajarnos a través de un proceso físico por el cual vibraciones de diferente origen se ajustan hasta lograr un mismo ritmo.',
      url: '/musica',
      color: 'primary',
      imagen: 'assets/images/musica.jpg',
    },
  ];
  constructor(private popoverController: PopoverController) {}

  displayInfo(event: MouseEvent): void {
    from(
      this.popoverController.create({
        event,
        component: InfoComponent,
        translucent: true,
      })
    )
      .pipe(switchMap((popover) => from(popover.present())))
      .subscribe();
  }
}
