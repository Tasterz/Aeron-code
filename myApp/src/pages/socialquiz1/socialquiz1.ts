import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Socialquiz2Page} from '../socialquiz2/socialquiz2';
//import {TextToSpeech} from 'ionic-native';


/*
  Generated class for the Socialquiz1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-socialquiz1',
  templateUrl: 'socialquiz1.html'
})
export class Socialquiz1Page {

    socialquiz2Page = Socialquiz2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Socialquiz1Page');
  }

}
