import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dinamica } from '../../dinamica.interface';
import { DINAMICAS } from '../../dinamicas';
import { DinamicaBaseComponent } from '../dinamica-base.component';

@Component({
  selector: 'app-dinamica-dos',
  templateUrl: './dinamica-dos.component.html',
})
export class DinamicaDosComponent extends DinamicaBaseComponent {
  pasos: string[] = [
    'Ten un reloj cerca para que puedas controlar el tiempo de tu meditación.',
    'Sientate con la espalda recta apoyada en una pared o en una silla.',
    'Para iniciar, intenta respirar lentamente durante dos minutos.',
    'Inhala por la nariz lentamente e intenta llevar el aire a la parte inferior de los pulmone, no infles el pecho, ensancha la parte del diafragma.',
    'Mantén la respiración al menos por 15 segundos, exhala el aire con lentitud, la velocidad debe ser menor a cuando inhalaste.',
    'Mientras haces todo este procedimiento, repite un mantra en tu mente y concéntrate en eso.',
    'La frase puede ser: “Estoy agradecid@ por todo lo que me da la vida”.',
    'Repite esta técnica de meditación por más tiempo.',
  ];
}
