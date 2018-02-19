import { Component, OnInit } from '@angular/core';
import { AudioTrackService } from './../../services/audiotrack/audiotrack.service';
import { AudioDTO } from '../../services/audiotrack/audiotrack.service';
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
  trackArtist: string;
  trackService: AudioTrackService;

  ngOnInit () {
    const audioDTO = this.trackService.getAudio();
    this.audioElement = new Audio();
    this.audioElement.src = audioDTO.src;
    this.audioElement.load();
    this.audioElement.volume = .5;
    this.audioElement.loop = 'loop';
    // this.audioElement.play(); // auto-start

    this.trackTitle = audioDTO.title;
    this.trackArtist = audioDTO.artist;
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
        return;
      }
      this.audioElement.volume = 1;
      this.displayedVolume = 100;
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
