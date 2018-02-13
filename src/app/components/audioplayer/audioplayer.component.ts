import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})

export class AudioPlayerComponent implements OnInit {

  audioElement: any;
  isPlaying: boolean;
  displayedVolume: number;
  trackTitle: string;

  ngOnInit () {
    this.audioElement = new Audio();
    this.audioElement.src = './../../assets/audio/SpaceshipAmbience.mp3';
    this.audioElement.load();
    // auto-start
    // this.audioElement.play();
    this.displayedVolume = 50;
    this.trackTitle = 'my cool song';
    this.audioElement.volume = .5;
    this.isPlaying = false;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // destroy audio here
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
  }

  constructor() {
      this.audioElement = document.getElementById('player'); // this should come from the service
   }

  volumeDown () {
      console.log('AudioPlayer.volumedown() ' + this.audioElement.volume);
      const volume = this.audioElement.volume;
      if (volume > .05) {
        this.audioElement.volume -= 0.05;
        this.displayedVolume -= 5;
        return;
      }
      if (volume  <= .05 ) {
        this.audioElement.volume = 0.00;
        this.displayedVolume = 0;
        return;
      }
    }


    volumeUp () {
      console.log('AudioPlayer.volumeup() ' + this.audioElement.volume);
      const volume = this.audioElement.volume;
      if (volume <= .95) {
        this.audioElement.volume += 0.05;
        this.displayedVolume += 5;
      }
    }

    play() {
        console.log('AudioPlayer.play()');
        this.audioElement.play();
        this.isPlaying = true;
    }


    pause () {
        console.log('AudioPlayer.pause()');
        this.audioElement.pause();
        this.isPlaying = false;
    }
}
