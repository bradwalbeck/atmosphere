import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AudioContainerComponent } from './components/audiocontainer/audiocontainer.component';
import { AudioPlayerComponent } from './components/audioplayer/audioplayer.component';
import { TitleComponent } from './components/title/title.component';

import { AudioTrackService } from './services/audiotrack/audiotrack.service';


@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    AudioContainerComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ AudioTrackService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
