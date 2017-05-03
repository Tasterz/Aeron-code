import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TextToSpeech} from '@ionic-native/text-to-speech';
//import {TextToSpeech} from 'ionic-native';

/*
  Generated class for the Mathquiz2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mathquiz2',
  templateUrl: 'mathquiz2.html'
})
export class Mathquiz2Page {

    score = 0;

   // private press;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
    

  }

  ngOnInit(){
      this.score = this.navParams.get('score');
  }
  /*
  pressEvent(){

  }
   */
   talkqmath2(){
      this.tts.speak({text: '81หาร9', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  talkans1math2(){
      this.tts.speak({text: 'หก', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

   talkans2math2(){
      this.tts.speak({text: 'เจ็ด', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

   talkans3math2(){
      this.tts.speak({text: 'แปด', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

   talkans4math2(){
      this.tts.speak({text: 'เก้า', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  

  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad Mathquiz2Page');
  }
  */

}
