import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



import {Mathquiz1Page} from '../mathquiz1/mathquiz1';
import {Socialquiz1Page} from '../socialquiz1/socialquiz1';
import {Engquiz1Page} from '../engquiz1/engquiz1';
/*
  Generated class for the Exam page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html'
})
export class ExamPage {

    //choosePage = ChoosePage;
    mathquiz1Page = Mathquiz1Page;
    socialquiz1Page = Socialquiz1Page;
    engquiz1Page = Engquiz1Page

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  //ionViewDidLoad() {
    //console.log('ionViewDidLoad ExamPage');
  //}

}
