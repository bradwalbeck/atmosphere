import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AudioTrackService } from './services/audiotrack/audiotrack.service';

import { AudioComponent } from './components/audio/audio.component';
import { AudioContainerComponent } from './components/audiocontainer/audiocontainer.component';
import { AudioPlayerComponent } from './components/audioplayer/audioplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    AudioContainerComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ AudioTrackService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
