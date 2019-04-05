import { Injectable } from '@angular/core';

@Injectable()
export class AudioTrackService {

  constructor() { }

  private displatedTrackTitle: string[] = [ 
     'Station Nominal - Engineered for atmosphere'
   , 'Aquatic Station - Engineered for atmosphere'
   , 'Ship Engines Stand By - Engineered for atmosphere'
   , 'Ship Engines Nominal - Engineered for atmosphere'
   , 'Why by Ilya Malyuev - Trance Remix by Greg Baumont'
   , 'Waiting TTTT - Minimal Ambient Bounce - Loyalty Freak Music'
   , 'Lag - Minimal Ambient Bounce - Loyalty Freak Music'
   , 'No Cadillac - Minimal Ambient Bounce - Loyalty Freak Music'
   ];

  public getAll () {
    //const baseUrl = '../../assets/audio/'; //local assets
    const baseUrl = 'https://github.com/bradwalbeck/atmosphere/blob/master/docs/assets/audio/';
    const audioElements = Array<HTMLAudioElement>();
    for (const src of this.displatedTrackTitle) {
      audioElements.push(this.loadAudioElement(baseUrl + src + '.mp3?raw=true', src));
    }
    return audioElements;
  }

  private loadAudioElement (src: string, title: string): HTMLAudioElement {
    const audio = new Audio();
    audio.src = src;
    audio.volume = 0.5;
    audio.loop = true;
    audio.title = title;
    return audio;
  }
}






