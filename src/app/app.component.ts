import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OpenUrlProvider } from './services/open-url/open-url';
import { SetCategoryService } from './services/set-category/set-category.service';

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
    private scg: SetCategoryService,
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
    this.scg.setCategory(category);
  }

}
