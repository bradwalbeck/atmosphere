import { Injectable } from '@angular/core';

@Injectable()
export class AudioTrackService {

  constructor() { }

  getAll () {
    return this.AUDIO;
  }

  // tslint:disable-next-line:member-ordering
  private AUDIO = [
    new AudioModel (
      './../../assets/audio/Airport-lounge-music-for-airports.mp3',
      'airport song',
      'airport guy'
    ),
    new AudioModel (
      './../../assets/audio/Howling-wind.mp3',
      'wind song',
      'wind guy'
    ),
    new AudioModel (
      './../../assets/audio/Piano-music-free.mp3',
      'piano song',
      'paino guy'
    ),
    new AudioModel (
      './../../assets/audio/Soft-rain-sound.mp3',
      'rain song',
      'rain guy'
    ),
    new AudioModel (
      './../../assets/audio/Six.mp3',
      'Six',
      'Marcel Pequel'
    ),
    new AudioModel (
      './../../assets/audio/MoonlightReprise.mp3',
      'Moonlight Reprise',
      'Kai Engel'
    )
  ];
}

export class AudioModel {
  constructor (
    public src: string,
    public title: string,
    public artist: string
  ) { }
}





