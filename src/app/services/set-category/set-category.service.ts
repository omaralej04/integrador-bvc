import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SetCategoryService {

  constructor(
    private menuCtrl: MenuController,
    private router: Router
  ) { }

  setCategory(category: string) {
    console.log('scg provider: ' + category);
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
