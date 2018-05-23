import { Component, OnInit } from '@angular/core';
import { AudioTrackService } from './../../services/audiotrack/audiotrack.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'audiocontainer',
  templateUrl: './audiocontainer.component.html',
  styleUrls: ['./audiocontainer.component.css']
})
export class AudioContainerComponent implements OnInit {
  trackService: AudioTrackService;
  abusedArray = [];
  constructor(trackService: AudioTrackService) {
    this.trackService = trackService;
    this.abusedArray = new Array(trackService.getAudioCount());
  }
  ngOnInit() {  }
}
