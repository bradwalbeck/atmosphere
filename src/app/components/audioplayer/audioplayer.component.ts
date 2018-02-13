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
    this.audioElement.play();
    this.isPlaying = true;
  }

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

  getVolume() {
    console.log('AudioPlayer.getVolume()');
    this.audioElement.getVolume();
  }

  setVolume(volume: number) {
    console.log('AudioPlayer.setVolume() : ' + volume );
    this.audioElement.setVolume(volume);
  }

  volumeDown () {
      console.log('AudioPlayer.volumedown()');
      this.audioElement.volumeDown();
    }

    volumeUp () {
      console.log('AudioPlayer.volumeup()');
      this.audioElement.volumeUp();
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
