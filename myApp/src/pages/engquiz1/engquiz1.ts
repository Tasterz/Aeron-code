import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Engquiz2Page} from '../engquiz2/engquiz2';

import {TextToSpeech} from '@ionic-native/text-to-speech';
//import {TextToSpeech} from 'ionic-native';

/*
  Generated class for the Engquiz1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-engquiz1',
  templateUrl: 'engquiz1.html'
})
export class Engquiz1Page {

    engquiz2Page = Engquiz2Page;

    score = 0 ;
    stateb1 = 0 ;
    stateb2 = 0 ;
    stateb3 = 0 ;
    stateb4 = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {

  }

  talkqeng1(){
      this.tts.speak({text: 'เครื่องบินตรงกับคำใดในภาษาอังกฤษ', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      
  }

  talkans1eng1(){
      this.tts.speak({text: 'Boat', locale:'en-EN', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      this.stateb1++ ;
      
      if(this.stateb1 == 2){
      this.navCtrl.push(Engquiz2Page,[score=>this.score]);
      }
  }

   talkans2eng1(){
      this.tts.speak({text: 'Airplane', locale:'en-EN', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      this.stateb2++ ;
      this.score++ ;

      
      if(this.stateb2 == 2){
      this.navCtrl.push(Engquiz2Page,[score=>this.score]);
      }
  }

   talkans3eng1(){
      this.tts.speak({text: 'Falcon', locale:'en-EN', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      this.stateb3++ ;
      if(this.stateb3 == 2){
      this.navCtrl.push(Engquiz2Page,[score=>this.score]);
      }
  }

   talkans4eng1(){
      this.tts.speak({text: 'Crow', locale:'en-EN', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      this.stateb4++ ;

      if(this.stateb4 == 2){
      this.navCtrl.push(Engquiz2Page,[score=>this.score]);
      }
  }

  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad Engquiz1Page');
  }
  */
}
