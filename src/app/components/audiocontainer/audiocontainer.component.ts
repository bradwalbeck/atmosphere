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

  constructor(trackService: AudioTrackService) {
    this.trackService = trackService;
  }
  ngOnInit() {  }
}
