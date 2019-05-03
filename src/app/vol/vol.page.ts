import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.page.html',
  styleUrls: ['./vol.page.scss'],
})
export class VolPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitPOST() {
    var login;
    var pass;

    login = this.loginDat;
    pass = this.passDat;

    console.log("Login: " + login + " Pass: " + pass)

    //let header: {
      //'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      //'Content-Type': 'application/x-www-form-urlencoded',
      //}

      /*
    let body = {
      transactionRequest: '510',
      key: "",
      event: "",
      sistemaOperativo: "",
      browser: "",
      versionCompleta: "",
      datoLogin: login,
      claveEntrada: pass
    }; */
    
    /*
    this.http.post<String>('/volRequest/VOL-Web/vc510.action;jsessionid=' + '06727472AD727BF5CFBD130BB239FBEF'
    , body, {headers: header , responseType: 'html' as 'string'})
    .subscribe(data => {
      console.log(data);
      var pageContent = data
      var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent as 'string');
      this.openURL(pageContentUrl);
    }); */

    var pageContent = '<html><head></head><body><form id="loginForm" action="/volRequest/VOL-Web/vc510.action;jsessionid=06727472AD727BF5CFBD130BB239FBEF" method="post">' +
    '<input type="hidden" name="datoLogin" value="' + login + '">' +
    '<input type="hidden" name="claveEntrada" value="' + pass + '">' +
    '<input type="hidden" name="transactionRequest" value="510" id="frmlogin_transactionRequest"/>' +
    '<input type="hidden" name="key" value="" id="frmlogin_key"/>' +
    '<input type="hidden" name="event" value="" id="frmlogin_event"/>' +
    '<input type="hidden" name="sistemaOperativo" value="" id="frmlogin_sistemaOperativo"/>' +
    '<input type="hidden" name="browser" value="" id="frmlogin_browser"/>' +
    '<input type="hidden"  id="versionCompleta" name="versionCompleta" />' +
    '</form> <script type="text/javascript">document.getElementById("loginForm").submit() />'


    var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent as 'string');
    this.openURL(pageContentUrl);
  }

  public openURL(url) {
    this.oup.openURL(url);
  }
}
