import { Component, OnInit } from '@angular/core';
import { Dinamica } from './dinamica.interface';
import { DINAMICAS } from './dinamicas';
@Component({
  selector: 'app-dinamicas',
  templateUrl: './dinamicas.page.html',
})
export class DinamicasPage implements OnInit {
  dinamicas: Dinamica[] = DINAMICAS;

  constructor() {}

  ngOnInit() {}
}
