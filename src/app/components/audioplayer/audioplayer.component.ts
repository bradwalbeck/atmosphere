import { Component, OnInit } from '@angular/core';
import { AudioTrackService } from './../../services/audiotrack/audiotrack.service';
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
  trackService: AudioTrackService;
  ngOnInit () {
    this.audioElement = new Audio();
    this.audioElement.src = this.trackService.getTrack();
    this.audioElement.load();
    this.audioElement.volume = .5;
    // this.audioElement.play(); // auto-start

    this.trackTitle = 'my cool song';
    this.isPlaying = !this.audioElement.paused;
    this.displayedVolume = this.audioElement.volume * 100;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // destroy audio here
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
  }
  constructor(trackService: AudioTrackService) {
      this.trackService = trackService;
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
