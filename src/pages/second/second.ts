import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
import { RadioPlayerProvider} from '../../providers/radio-player/radio-player'


/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
   myTracks: any[];
  allTracks: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private media: MediaPlugin,private nativeAudio: NativeAudio,player: RadioPlayerProvider) {
  	

this.myTracks = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      artist: 'Test Data',
      title: 'Test Data',
      art: 'img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
      artist: 'Test Data',
      title: 'Test Data',
      art: 'img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];
  }


  }




  



