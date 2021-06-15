import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Subject, Observable, timer } from 'rxjs';
import {
  switchMapTo,
  map,
  share,
  filter,
  takeUntil,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-tecnica-dos-slides',
  templateUrl: './tecnica-dos-slides.component.html',
})
export class TecnicaDosSlidesComponent implements OnDestroy {
  slideOptions = {
    allowTouchMove: false,
    loop: true,
  };

  slideAnimationDuration: number = 1000;

  @ViewChild(IonSlides) private slides: IonSlides;
  private readonly reset$: Subject<void> = new Subject<void>();
  private readonly startSevenCountdown$: Subject<void> = new Subject<void>();
  private readonly startEightCountdown$: Subject<void> = new Subject<void>();
  private readonly startRepeatCountdown$: Subject<void> = new Subject<void>();

  private readonly destroy$: Subject<void> = new Subject<void>();

  readonly fourCountdown$: Observable<number> = this.reset$.pipe(
    switchMapTo(timer(this.slideAnimationDuration, 1500)),
    map((v) => 4 - v),
    take(5),
    share()
  );
  readonly sevenCountdown$: Observable<number> = this.startSevenCountdown$.pipe(
    switchMapTo(timer(this.slideAnimationDuration, 1000)),
    map((v) => 7 - v),
    take(8),
    share()
  );
  readonly eightCountdown$: Observable<number> = this.startEightCountdown$.pipe(
    switchMapTo(timer(this.slideAnimationDuration, 1000)),
    map((v) => 8 - v),
    take(9),
    share()
  );

  readonly repeatCountdown$: Observable<number> =
    this.startRepeatCountdown$.pipe(
      switchMapTo(timer(this.slideAnimationDuration, 1500)),
      map((v) => 3 - v),
      take(4),
      share()
    );

  readonly isFinished = (v: number) => v === 0;

  ngAfterViewInit() {
    this.reset$.next();
    this.fourCountdown$
      .pipe(filter(this.isFinished), takeUntil(this.destroy$))
      .subscribe(() => {
        this.startSevenCountdown$.next();
        this.slides.slideNext();
      });
    this.sevenCountdown$
      .pipe(filter(this.isFinished), takeUntil(this.destroy$))
      .subscribe(() => {
        this.startEightCountdown$.next();
        this.slides.slideNext();
      });
    this.eightCountdown$
      .pipe(filter(this.isFinished), takeUntil(this.destroy$))
      .subscribe(() => {
        this.startRepeatCountdown$.next();
        this.slides.slideNext();
      });
    this.repeatCountdown$
      .pipe(filter(this.isFinished), takeUntil(this.destroy$))
      .subscribe(() => {
        this.reset$.next();
        this.slides.slideNext();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
