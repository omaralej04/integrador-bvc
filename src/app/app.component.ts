import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OpenUrlProvider } from './services/open-url/open-url';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oup: OpenUrlProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openURL(url) {
    this.oup.openURL(url);
  }

  setCategory(category: string) {
    console.log(category);
    return 'notImplemented';
  }

  /*
  setCategory(category: string) {
    switch (category) {
      case 'home':
        // this.rootPage = HomePage;
        this.navigateRoot();
        break;
      case 'personal':
      // Circumvent opening infinite subpages of same category
      console.log('Page ID is: ' + this.nav.getActive().name);
      if (this.nav.getActive().name != 'PersonalPage') {
        this.nav.push(PersonalPage);
      }
      break;
      case 'comercial':
      console.log('Page ID is: ' + this.nav.getActive().name);
      if (this.nav.getActive().name != 'ComercialPage') {
      this.nav.push(ComercialPage);
      }
      break;
      case 'agencia':
      console.log('Page ID is: ' + this.nav.getActive().name);
      if (this.nav.getActive().name != 'AgenciaPage') {
      this.nav.push(AgenciaPage);
      }
      break;
      case 'social':
      console.log('Page ID is: ' + this.nav.getActive().name);
      if (this.nav.getActive().name != 'SocialPage') {
      this.nav.push(SocialPage);
      }
      break;
      case 'ayuda':
      console.log('Page ID is: ' + this.nav.getActive().name);
      if (this.nav.getActive().name != 'AyudaPage') {
      this.nav.push(AyudaPage);
      }
      break;
      case 'config':
      console.log('Page ID is: ' + this.nav.getActive().name);
      if (this.nav.getActive().name != 'ConfigPage') {
      this.nav.push(ConfigPage);
        }
      }
  } */

}
