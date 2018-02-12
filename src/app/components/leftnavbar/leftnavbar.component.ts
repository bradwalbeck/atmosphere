import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})

export class LeftNavbarComponent implements OnInit {
  ngOnInit() { }
}

export class AudioPlayer {
  audioElement: any;

  constructor(audioElement: any) {
    this.audioElement = audioElement;
  }

  volumeDown () {
    console.log('AudioPlayer.volumedown()');
    this.audioElement.volumeDown();
  }

  volumeUp () {
    console.log('AudioPlayer.volumeup()');
    this.audioElement.volumeUp();
  }

  play() {

      console.log('AudioPlayer.play()');
      this.audioElement.play();

  }

  pause () {
      console.log('AudioPlayer.pause()');
      this.audioElement.pause();
  }

  isPlaying () {
    return this.audioElement.isPlaying();
  }

}
