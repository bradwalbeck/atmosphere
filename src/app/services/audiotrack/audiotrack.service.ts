import { Injectable } from '@angular/core';

@Injectable()
export class AudioTrackService {

  constructor() { }

  private srcs: string[] = [
    'Airport-lounge-music-for-airports'
   , 'Howling-wind'
   , 'Piano-music-free'
   , 'Soft-rain-sound'
   , 'Six'
   , 'MoonlightReprise'
   , 'Spaceship Ambience'
  ];

  public getAll () {
    const baseUrl = 'https://github.com/bradwalbeck/atmosphere/blob/master/docs/assets/audio/';
    const audioElements = Array<HTMLAudioElement>();
    for (const src of this.srcs) {
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






