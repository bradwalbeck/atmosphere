import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})

export class AudioPlayerComponent implements OnInit {

  audioElement: HTMLAudioElement;
  ngOnInit() { }

  constructor() {
      this.audioElement = document.getElementById('player'); // this should come from the service
   }

  getVolume() {
    return
  }

  setVolume(value: number) {

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

    }


    pause () {
        console.log('AudioPlayer.pause()');
        this.audioElement.pause();
    }

    isPlaying () {
      return this.audioElement.isPlaying();
    }
}
