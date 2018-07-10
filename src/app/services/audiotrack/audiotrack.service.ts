import { Injectable } from '@angular/core';

@Injectable()
export class AudioTrackService {

  constructor() { }

  private srcs: string[] = [ // this should fill by getting the names from the files in the folder
    'Airport-lounge-music-for-airports'
   , 'Howling-wind'
   , 'Piano-music-free'
   , 'Soft-rain-sound'
   , 'Six'
   , 'MoonlightReprise'
  ];

  public getAll () {
    const baseUrl = './../../assets/audio/';
    const audioElements = Array<HTMLAudioElement>();
    for (const src of this.srcs) {
      audioElements.push(this.loadAudioElement(baseUrl + src + '.mp3'));
    }
    return audioElements;
  }

  private loadAudioElement (src: string): HTMLAudioElement {
    const audio = new Audio();
    audio.src = src;
    audio.volume = 0.5;
    audio.loop = true;
    return audio;
  }
}






