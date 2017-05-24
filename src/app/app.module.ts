import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AudioProvider, WebAudioProvider, audioProviderFactory } from 'ionic-audio';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';




import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SecondPage } from '../pages/second/second';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http';
import { IonicAudioModule } from 'ionic-audio';
import { RadioPlayerProvider } from '../providers/radio-player/radio-player';


export function myCustomAudioProviderFactory() {
  return new WebAudioProvider();
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SecondPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SecondPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    RadioPlayerProvider,
    MediaPlugin,
    NativeAudio
  ]
})
export class AppModule {}
