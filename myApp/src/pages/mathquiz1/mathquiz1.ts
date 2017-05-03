import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Mathquiz2Page} from '../mathquiz2/mathquiz2';

import {TextToSpeech} from '@ionic-native/text-to-speech';

/*
  Generated class for the Mathquiz1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mathquiz1',
  templateUrl: 'mathquiz1.html'

  
})
export class Mathquiz1Page {

    mathquiz2Page = Mathquiz2Page ;
    score = 0 ;
    statea1 = 0 ;
    statea2 = 0 ;
    statea3 = 0 ;
    statea4 = 0 ;


    //private press;

    

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {

  }

  

  /*
  speak(){
    console.log("Try to speak !")
    this.tts.speak('Hello World')
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

    this.score++ ;  
    this.navCtrl.push('mathquiz2', [score=>this.score])
  }
  */

  talkqmath1(){
      this.tts.speak({text: 'สี่คูณห้า', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      
  }

  talkans1math1(){
      this.tts.speak({text: 'สิบห้า', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      this.statea1++ ;
      
      if(this.statea1 == 2){
      this.navCtrl.push(Mathquiz2Page,[score=>this.score]);
      }
  }

   talkans2math1(){
      this.tts.speak({text: 'ยี่สิบ', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      this.statea2++ ;
      this.score++ ;

      
      if(this.statea2 == 2){
      this.navCtrl.push(Mathquiz2Page,[score=>this.score]);
      }
  }

   talkans3math1(){
      this.tts.speak({text: 'ยี่สิบห้า', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      this.statea3++ ;
      if(this.statea3 == 2){
      this.navCtrl.push(Mathquiz2Page,[score=>this.score]);
      }
  }

   talkans4math1(){
      this.tts.speak({text: 'สามสิบ', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

      this.statea4++ ;

      if(this.statea4 == 2){
      this.navCtrl.push(Mathquiz2Page,[score=>this.score]);
      }
  }
  

  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad Mathquiz1Page');
  }
  */
}
