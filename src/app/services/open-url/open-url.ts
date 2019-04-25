import { Injectable } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
// Import InAppBrowserOptions later
/*
  Generated class for the OpenUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable({ providedIn: 'root' })
export class OpenUrlProvider {
  constructor(public inAppBrowser: InAppBrowser) {
    console.log('Running OpenUrlProvider');
  }

  url: string;
  public openURL(url) {
    console.log('Opening URL');
    // Browse Web inside app
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no',
      hidden: 'yes',
      hardwareback: 'no',
      toolbarposition: 'top',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Salir'
     };
    console.log(url);
    const browser = this.inAppBrowser.create(url, '_blank', options);
    console.log('Showing browser!');
    browser.show();
  }
}
