import { Injectable } from '@angular/core';

@Injectable()
export class AudioTrackService {

  constructor() { }
  TRACKS = [
    './../../assets/audio/Airport-lounge-music-for-airports.mp3',
    './../../assets/audio/Howling-wind.mp3',
    './../../assets/audio/Piano-music-free.mp3',
    './../../assets/audio/Soft-rain-sound.mp3',
    './../../assets/audio/SpaceshipAmbience.mp3'
  ];
  getTrack() {
    return this.TRACKS.pop();
  }
}

