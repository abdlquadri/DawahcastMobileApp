import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RadioPlayerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RadioPlayerProvider {

  url:string;
  stream:any;
  promise:any;

  constructor(public http: Http) {
this.url = "http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/006.mp3";
   this.stream = new Audio(this.url);
  }

play() {
   this.stream.play();
   this.promise = new Promise((resolve,reject) => {
     this.stream.addEventListener('playing', () => {
       resolve(true);
     });

     this.stream.addEventListener('error', () => {
       reject(false);
     });
   });
   
  return this.promise;
};

pause() {
  this.stream.pause();
};

}
