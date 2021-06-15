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
      nombre: 'Sora Ni Utaeba',
      url: 'assets/mp3/Sora Ni Utaeba - Amazarashi.mp3',
    },
    {
      nombre: 'Good Morning World',
      url: 'assets/mp3/Good Morning World - Burnout Syndromes.mp3',
    },
    {
      nombre: 'Kaikai Kitan',
      url: 'assets/mp3/Kaikai Kitan - Eve.mp3',
    },
    {
      nombre: 'Lost In Paradise',
      url: 'assets/mp3/Lost In Paradise - Ali ft. AKLO.mp3',
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
