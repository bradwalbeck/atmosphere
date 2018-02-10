import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})

export class LeftNavbarComponent implements OnInit {

  public audioPlayer: AudioPlayer;

  constructor() {
    this.audioPlayer = new AudioPlayer();
    this.audioPlayer.audioElement = document.getElementById('player');
    // document.getElementById("player").src = "./../../assets/audio/SpaceshipAmbience.mp3";
    // this.audioPlayer.audioElement.src = "./../../assets/audio/SpaceshipAmbience.mp3";
    this.audioPlayer.volume = .30;
    this.audioPlayer.playing = false;
  }

  ngOnInit() {

  }

  volumedown() {
    this.audioPlayer.volumedown();
  }

  volumeup() {
    this.audioPlayer.volumeup();
  }

  play() {
    this.audioPlayer.audioElement.play();
    this.audioPlayer.playing = true;
  }

  pause() {
    this.audioPlayer.audioElement.pause();
    this.audioPlayer.playing = false;
  }
}

export class AudioPlayer {
  audioElement: any;
  playing: boolean;
  volume: number;

  volumedown() {
    if (this.volume > .05) {
      this.volume -= .05;
    }
  }

  volumeup() {
    if (this.volume < 1.00) {
      this.volume += .05;
    }
  }
  play() {}
  pause () {}
}
