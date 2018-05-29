import { Input, Component } from '@angular/core';
import { AudioTrackService } from './../../services/audiotrack/audiotrack.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})

export class AudioPlayerComponent {
  @Input() audioElement: HTMLAudioElement;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
  }

  volumeUp() {
      this.audioElement.volume += 0.05;
  }

  volumeDown() {
      this.audioElement.volume -= 0.05;
  }
}
