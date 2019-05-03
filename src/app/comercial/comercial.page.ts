import { Component, OnInit } from '@angular/core';
import { OpenUrlProvider } from '../services/open-url/open-url';

@Component({
  selector: 'app-comercial',
  templateUrl: './comercial.page.html',
  styleUrls: ['./comercial.page.scss'],
})
export class ComercialPage implements OnInit {

  constructor(public oup: OpenUrlProvider) { }

  ngOnInit() {
  }

  openURL(url) {
    this.oup.openURL(url);
  }
}
