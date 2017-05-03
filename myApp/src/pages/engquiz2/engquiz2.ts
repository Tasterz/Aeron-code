import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TextToSpeech} from '@ionic-native/text-to-speech';

//import {TextToSpeech} from 'ionic-native';

/*
  Generated class for the Engquiz2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-engquiz2',
  templateUrl: 'engquiz2.html'
})
export class Engquiz2Page {

  score = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {

  }

  ngOnInit(){
      this.score = this.navParams.get('score');
  }


   talkqeng2(){
      this.tts.speak({text: 'Where are you from แปลว่า', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  talkans1eng2(){
      this.tts.speak({text: 'คุณอายุเท่าไหร่', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

   talkans2eng2(){
      this.tts.speak({text: 'คุณชื่ออะไร', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

   talkans3eng2(){
      this.tts.speak({text: 'คุณมาจากไหน', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

   talkans4eng2(){
      this.tts.speak({text: 'คุณหนักเท่าไหร่', locale:'th-TH', rate:0.5})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad Engquiz2Page');
  }
  */
}
