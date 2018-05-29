import { Input, Component, OnInit } from '@angular/core';
import { AudioTrackService } from './../../services/audiotrack/audiotrack.service';
import { AudioModel } from '../../services/audiotrack/audiotrack.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})

export class AudioPlayerComponent implements OnInit {
  @Input() audioModel: AudioModel;
  audioElement: any;
  displayedVolume: number;
  trackTitle: string;
  trackArtist: string;

  ngOnInit() {
    // Audio (HTMLMediaElement) is of type https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
    this.audioElement = new Audio();
    this.audioElement.src = this.audioModel.src;
    this.audioElement.load();
    this.audioElement.volume = 0.5;
    this.audioElement.loop = 'loop';
    // this.audioElement.play(); // auto-start
    this.displayedVolume = this.audioElement.volume * 100;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
  }
  constructor() {  }

  volumeDown() {
    const volume = this.audioElement.volume;
    if (volume > 0.05) {
      this.audioElement.volume -= 0.05;
      this.displayedVolume -= 5;
      return;
    }
    this.audioElement.volume = 0.0;
    this.displayedVolume = 0;
  }

  volumeUp() {
    const volume = this.audioElement.volume;
    if (volume <= 0.95) {
      this.audioElement.volume += 0.05;
      this.displayedVolume += 5;
      return;
    }
    this.audioElement.volume = 1;
    this.displayedVolume = 100;
  }

  play() {
    this.audioElement.play();
  }

  pause() {
    this.audioElement.pause();
  }
}
