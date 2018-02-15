import { Injectable } from '@angular/core';

@Injectable()
export class AudioTrackService {

  constructor() { }
  private AUDIO = [
    new AudioDTO (
      './../../assets/audio/Airport-lounge-music-for-airports.mp3',
      'airport song',
      'airport guy'
    ),
    new AudioDTO (
      './../../assets/audio/Howling-wind.mp3',
      'wind song',
      'wind guy'
    ),
    new AudioDTO (
      './../../assets/audio/Piano-music-free.mp3',
      'piano song',
      'paino guy'
    ),
    new AudioDTO (
      './../../assets/audio/Soft-rain-sound.mp3',
      'rain song',
      'rain guy'
    ),
    new AudioDTO (
      './../../assets/audio/SpaceshipAmbience.mp3',
      'space song',
      'space guy'
    ),

  ];

  getAudio() {
    return this.AUDIO.pop();
  }
  getAudioCount() {
    return this.AUDIO.length;
  }

}

export class AudioDTO {
  title: string;
  src: string;
  artist: string;

  constructor (src: string, title: string, artist: string) {
    this.src = src;
    this.title = title;
    this.artist = artist;
  }
}





