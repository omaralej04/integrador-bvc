import { Component } from '@angular/core';
import { OpenUrlProvider } from '../services/open-url/open-url';
import { SetCategoryService } from '../services/set-category/set-category.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private oup: OpenUrlProvider,
    private scg: SetCategoryService
  ) {
  }

  openURL(url) {
    this.oup.openURL(url);
  }

  setCategory(category) {
    this.scg.setCategory(category);
  }

}
