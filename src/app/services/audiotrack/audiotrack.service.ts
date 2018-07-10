import { Injectable } from '@angular/core';

@Injectable()
export class AudioTrackService {

  constructor() { }

  private srcs: string[] = [ // this should fill by getting the names from the files in the folder
    'Airport-lounge-music-for-airports.mp3'
   , 'Howling-wind.mp3'
   , 'Piano-music-free.mp3'
   , 'Soft-rain-sound.mp3'
   , 'Six.mp3'
   , 'MoonlightReprise.mp3'
  ];

  public getAll () {
    const baseUrl = './../../assets/audio/';
    const audioElements = Array<HTMLAudioElement>();
    for (const src of this.srcs) {
      audioElements.push(this.loadAudioElement(baseUrl + src));
    }
    return audioElements;
  }

  private loadAudioElement (src: string): HTMLAudioElement {
    const audio = new Audio();
    audio.src = src;
    audio.load();
    audio.volume = 0.5;
    audio.loop = true;
    return audio;
  }
}






