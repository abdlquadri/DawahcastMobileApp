import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { SecondPage } from '../second/second';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HttpProvider],
  
})
export class HomePage {
  newsData: any;
  loading: any;

  constructor(public navCtrl: NavController, public httpProvider:HttpProvider,public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
   content: "Loading lectures...",
  duration: 3000
    });

    this.getdata();

  }

getdata(){
    this.loading.present();
    this.httpProvider.getJsonData().subscribe(
      result => {
       console.log(result);
        this.newsData= result;
        console.log("Success : "+this.newsData);
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        this.loading.dismiss();
        console.log('getData completed');
      }
    );



  }
  launchSecondPage() {
    let data = this.newsData; 

    this.navCtrl.push(SecondPage, data);
  }

}
