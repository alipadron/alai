import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tecnica-slides',
  templateUrl: './tecnica-slides.page.html',
})
export class TecnicaSlidesPage implements OnInit {
  tecnicaId$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => parseInt(paramMap.get('tecnicaId')))
  );

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
