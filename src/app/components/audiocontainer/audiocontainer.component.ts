import { Component } from '@angular/core';
import { AudioTrackService } from './../../services/audiotrack/audiotrack.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'audiocontainer',
  templateUrl: './audiocontainer.component.html',
  styleUrls: ['./audiocontainer.component.css']
})
export class AudioContainerComponent {
  audioTracks: Array<HTMLAudioElement>;
  constructor(public trackService: AudioTrackService) {
    this.audioTracks = this.trackService.getAll();
  }
}
