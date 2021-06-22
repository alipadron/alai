import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { Howl, Howler } from 'howler';
import { Cancion } from './cancion.interface';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
})
export class MusicaPage {
  playlist: Cancion[] = [
    {
      nombre: 'Fix You - Coldplay',
      url: 'assets/mp3/Fix You - Coldplay.mp3',
    },
    {
      nombre: 'Strawberry Swing - Coldplay',
      url: 'assets/mp3/Strawberry Swing - Coldplay.mp3',
    },
    {
      nombre: 'The Scientist - Coldplay',
      url: 'assets/mp3/The Scientist - Coldplay.mp3',
    },
    {
      nombre: 'Yellow - Coldplay',
      url: 'assets/mp3/Yellow - Coldplay.mp3',
    },
    {
      nombre: 'Anchor - Novo Amor',
      url: 'assets/mp3/Anchor - Novo Amor.mp3',
    },
    {
      nombre: 'Birthplace - Novo Amor',
      url: 'assets/mp3/Birthplace - Novo Amor.mp3',
    },
    {
      nombre: 'Carry You - Novo Amor',
      url: 'assets/mp3/Carry You - Novo Amor.mp3',
    },
    {
      nombre: 'Haven - Novo Amor',
      url: 'assets/mp3/Haven - Novo Amor.mp3',
    },
    {
      nombre: 'Repeat Until Death - Novo Amor',
      url: 'assets/mp3/Repeat Until Death - Novo Amor.mp3',
    },
    {
      nombre: 'State Lines - Novo Amor',
      url: 'assets/mp3/State Lines - Novo Amor.mp3',
    },
    {
      nombre: 'When The Darkness Comes - Colbie Caillat',
      url: 'assets/mp3/When The Darkness Comes - Colbie Caillat.mp3',
    },
    {
      nombre: 'Electra - Airstream',
      url: 'assets/mp3/Electra - Airstream.mp3',
    },
    {
      nombre: 'Watermark - Enya',
      url: 'assets/mp3/Watermark - Enya.mp3',
    },
  ];

  activeTrack: Cancion = null;

  player: Howl = null;

  isPlaying: boolean = false;

  progress: number = 0;

  @ViewChild(IonRange) range: IonRange;

  constructor() {}

  start(track: Cancion) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      html5: true,
      src: track.url,
      onplay: () => {
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgress();
      },
      onend: () => {
        this.next();
      },
    });
    this.player.play();
  }

  togglePlayer(pause: boolean) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next() {
    const index = this.playlist.indexOf(this.activeTrack);
    if (index !== this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }

  prev() {
    const index = this.playlist.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.playlist[index - 1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }

  seek() {
    const newValue = +this.range.value;
    const duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  updateProgress() {
    const seek = +this.player.seek();

    this.progress = (seek / this.player.duration()) * 100 || 0;

    setTimeout(() => this.updateProgress(), 500);
  }
}
