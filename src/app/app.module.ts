import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { timer } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { take, tap } from 'rxjs/operators';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: 'Atrás',
    }),
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: (document: Document) => () =>
        timer(0, 1000)
          .pipe(
            take(3),
            tap((i) => {
              if (i === 2) {
                const img: HTMLImageElement = document.querySelector('#hero');
                img.classList.add('animate__fadeOut');
                img.addEventListener(
                  'animationend',
                  () => img.parentElement.remove(),
                  { once: true }
                );
              }
            })
          )
          .toPromise(),
      multi: true,
      deps: [DOCUMENT],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
