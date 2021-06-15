import { Component, Input } from '@angular/core';
import { Dinamica } from '../dinamica.interface';

@Component({
  template: '',
})
export abstract class DinamicaBaseComponent {
  @Input() dinamica: Dinamica;
}
