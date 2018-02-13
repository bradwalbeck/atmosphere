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

  ngOnInit () {
    this.audioElement = new Audio();
    this.audioElement.src = './../../assets/audio/SpaceshipAmbience.mp3';
    this.audioElement.load();
    // auto-start
    // this.audioElement.play();
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
      console.log('AudioPlayer.volumedown()');
      const volume = this.audioElement.volume;
      if (volume > .05) {
        this.audioElement.volume -= 0.05;
        return;
      }
      if (volume  <= .05 ) {
        this.audioElement.volume = 0.00;
        this.pause();
        return;
      }
    }


    volumeUp () {
      console.log('AudioPlayer.volumeup()');
      const volume = this.audioElement.volume;
      if (volume <= .95) {
        this.audioElement.volume += 0.05;
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
