import { Component } from '@angular/core';

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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt aperiam quas. Nihil, quas nulla exercitationem distinctio earum, quia expedita autem est corrupti id obcaecati inventore perspiciatis laudantium! Exercitationem, architecto?',
      url: '/musica',
      color: 'primary',
      imagen: 'assets/images/musica.jpg',
    },
  ];
  constructor() {}
}
