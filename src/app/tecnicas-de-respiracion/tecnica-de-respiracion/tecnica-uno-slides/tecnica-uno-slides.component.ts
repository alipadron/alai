import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { from, Observable, Subject, timer } from 'rxjs';
import {
  filter,
  map,
  share,
  shareReplay,
  switchMap,
  switchMapTo,
} from 'rxjs/operators';

@Component({
  selector: 'app-tecnica-uno-slides',
  templateUrl: './tecnica-uno-slides.component.html',
})
export class TecnicaUnoSlidesComponent implements AfterViewInit {
  slideOptions = {
    allowTouchMove: false,
    loop: true,
  };

  slideAnimationDuration: number = 1000;

  @ViewChild(IonSlides) private slides: IonSlides;
  private readonly reset$: Subject<void> = new Subject<void>();

  readonly timer$: Observable<number> = this.reset$.pipe(
    switchMapTo(timer(this.slideAnimationDuration, 1500)),
    map((v) => 3 - v),
    shareReplay()
  );

  private readonly timerFinished$ = this.timer$.pipe(filter((v) => v === 0));

  ngAfterViewInit() {
    this.reset$.next();
    this.timerFinished$
      .pipe(switchMap(() => from(this.slides.getActiveIndex())))
      .subscribe((i) => {
        if (i === 4) {
          this.slides.slideTo(1, 0);
        } else {
          this.slides.slideNext(this.slideAnimationDuration);
        }
        this.reset$.next();
      });
  }
}
