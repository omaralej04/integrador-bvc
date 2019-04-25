import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OpenUrlProvider } from './services/open-url/open-url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oup: OpenUrlProvider,
    private router: Router,
    private menuCtrl: MenuController
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
    switch (category) {
      case 'home':
        this.menuCtrl.close();
        this.router.navigateByUrl('/home');
        break;
      case 'personal':
        this.menuCtrl.close();
        this.router.navigateByUrl('/personal');
        break;
      case 'comercial':
        this.menuCtrl.close();
        this.router.navigateByUrl('/comercial');
        break;
      case 'agencia':
        this.menuCtrl.close();
        this.router.navigateByUrl('/agencia');
        break;
      case 'social':
        this.menuCtrl.close();
        this.router.navigateByUrl('/social');
        break;
      case 'ayuda':
        this.menuCtrl.close();
        this.router.navigateByUrl('/ayuda');
        break;
      case 'config':
        this.menuCtrl.close();
        this.router.navigateByUrl('/config');
        break;
    }
  }

}
