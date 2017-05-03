import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ExamPage} from '../exam/exam';
import {DownloadPage} from '../download/download';
import {ScorePage} from '../score/score';
import {SettingPage} from '../setting/setting';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  examPage = ExamPage;
  downloadPage = DownloadPage;
  scorePage = ScorePage;
  settingPage = SettingPage

  constructor(public navCtrl: NavController) {

  }
  

}
