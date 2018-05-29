import { Injectable } from '@angular/core';

@Injectable()
export class AudioTrackService {

  constructor() { }

  private srcs: string[] = [ // this should fill by getting the names from the files in the folder
    './../../assets/audio/Airport-lounge-music-for-airports.mp3'
   , './../../assets/audio/Howling-wind.mp3'
   , './../../assets/audio/Piano-music-free.mp3'
   , './../../assets/audio/Soft-rain-sound.mp3'
   , './../../assets/audio/Six.mp3'
   , './../../assets/audio/MoonlightReprise.mp3'
  ];

  getAll () {
    const audioElements = Array<HTMLAudioElement>();
    for (const src of this.srcs) {
      audioElements.push(this.loadAudioElement(src));
    }
    return audioElements;
  }

  loadAudioElement (src: string): HTMLAudioElement {
    const audio = new Audio();
    audio.src = src;
    audio.load();
    audio.volume = 0.5;
    audio.loop = true;
    return audio;
  }
}






