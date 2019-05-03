import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewController } from '@ionic/core';

// Modal Component
@Component({
  templateUrl: 'modalTemplate.html'
})

export class ModalTemplatePage {
  topico;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public sanitizer: DomSanitizer,
    public modalCtrl: ModalController
  ) {

    const topicos = [
      {
        name: 'Ingreso y Recuperación de Clave',
        link: 'https://www.youtube.com/embed/pkMxzN7de9o',
      },
      {
        name: 'Recuperación de Clave y Usuario',
        link: 'https://www.youtube.com/embed/zeQ8KiICD04'
      },
      {
        name: 'Asignación de Parámetros Personales',
        link: 'https://www.youtube.com/embed/rq6dyJ49H-U',
      },
      {
        name: 'Solicitud de Referencias Bancarias',
        link: 'https://www.youtube.com/embed/XRP2rggKjjU',
      },

      {
        name: 'Suspensión de Cheques',
        link: 'https://www.youtube.com/embed/tNXodenHTFg&t=50s',
      },

      {
        name: 'Solicitud y Activación de Chequeras',
        link: 'https://www.youtube.com/embed/r06L7ENTfnE',
      },

      {
        name: 'Solicitud de Cheques de Gerencia',
        link: 'https://www.youtube.com/embed/_SfIRskgwAE',
      },

      {
        name: 'Solicitud de Avance de Efectivo',
        link: 'https://www.youtube.com/embed/8aeah4_cgPY',
      },

      {
        name: 'Solicitud y Activación de Tarjetas de Débito',
        link: 'https://www.youtube.com/embed/OjktWOzAvJ4',
      },

      {
        name: 'Transferencias a Terceros',
        link: 'https://www.youtube.com/embed/e-zeLIJtB9M',
      },

      {
        name: 'Pago de Servicios',
        link: 'https://www.youtube.com/embed/bCapVAb6ow4',
      },

      {
        name: 'Pago de Tarjetas de Crédito',
        link: 'https://www.youtube.com/embed/qTC9TNW2aDs',
      },

      {
        name: 'Agenda de Pagos',
        link: 'https://www.youtube.com/embed/GDeZvf4A3qI',
      },

      {
        name: 'Domiciliación de Servicios',
        link: 'https://www.youtube.com/embed/kXx1twGolB4',
      },

      {
        name: 'Consulta y Solicitud de Fidecomiso',
        link: 'https://www.youtube.com/embed/aLt2iLXadg4',
      },
    ];
    this.topico = topicos[this.params.get('topic')];
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  openModal(topic) {
    const modal = this.modalCtrl.create({
      component: ModalTemplatePage,
      componentProps: topic
    });
    modal.finally();
  }

  ngOnInit() {
  }

}
