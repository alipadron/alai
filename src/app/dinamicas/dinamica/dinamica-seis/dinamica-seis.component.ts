import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, timer, of, Subject } from 'rxjs';
import { map, shareReplay, scan, switchMap, tap } from 'rxjs/operators';
import { DinamicaBaseComponent } from '../dinamica-base.component';
interface TimerState {
  count: boolean;
  value: number;
}

@Component({
  selector: 'app-dinamica-seis',
  templateUrl: './dinamica-seis.component.html',
})
export class DinamicaSeisComponent extends DinamicaBaseComponent {
  timerState: BehaviorSubject<TimerState> = new BehaviorSubject<TimerState>({
    count: false,
    value: 100,
  });

  isRunning$: Observable<boolean> = this.timerState.pipe(
    map(({ count }) => count),
    shareReplay()
  );

  time$: Observable<number> = this.timerState.pipe(
    scan((state, curr) => ({ ...state, ...curr })),
    switchMap((state) =>
      state.count
        ? timer(0, 1000).pipe(map((i) => state.value - i))
        : of(state.value)
    ),
    tap((v) => {
      if (v === 0) {
        this.timerState.next({ count: false, value: 100 });
      }
    })
  );
}
