import { Component, OnInit } from '@angular/core';
import { OpenUrlProvider } from '../services/open-url/open-url';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  constructor(private oup: OpenUrlProvider,
              // private router: Router
              ) { }

  ngOnInit() {
  }

  public openURL(url) {
    this.oup.openURL(url);
  }

  setCategory(category: string) {
    console.log(category);
    return 'notImplemented';
  }

}
