import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ExamPage} from '../pages/exam/exam';
import {DownloadPage} from '../pages/download/download';
import {ScorePage} from '../pages/score/score';
import {SettingPage} from '../pages/setting/setting';
import {ChoosePage} from '../pages/choose/choose';
import {Mathquiz1Page} from '../pages/mathquiz1/mathquiz1';
import {Mathquiz2Page} from '../pages/mathquiz2/mathquiz2';
import {Socialquiz1Page} from '../pages/socialquiz1/socialquiz1';
import {Socialquiz2Page} from '../pages/socialquiz2/socialquiz2';
import {Engquiz1Page} from '../pages/engquiz1/engquiz1';
import {Engquiz2Page} from '../pages/engquiz2/engquiz2';
import {TextToSpeech} from '@ionic-native/text-to-speech';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ExamPage,
    DownloadPage,
    ScorePage,
    SettingPage,
    ChoosePage,
    Mathquiz1Page,
    Mathquiz2Page,
    Socialquiz1Page,
    Socialquiz2Page,
    Engquiz1Page,
    Engquiz2Page

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ExamPage,
    DownloadPage,
    ScorePage,
    SettingPage,
    ChoosePage,
    Mathquiz1Page,
    Mathquiz2Page,
    Socialquiz1Page,
    Socialquiz2Page,
    Engquiz1Page,
    Engquiz2Page
    

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},TextToSpeech]
})
export class AppModule {}
