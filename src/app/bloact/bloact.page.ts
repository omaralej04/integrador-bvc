import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-bloact',
  templateUrl: './bloact.page.html',
  styleUrls: ['./bloact.page.scss'],
})
export class BloactPage implements OnInit {

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private sms: SMS
  ) { }

  ngOnInit() {
    console.log('ionViewDidLoad BloactPage');
    $('.bloqueoform').hide();
    $('.funcbuttonact').prop('disabled', true);
  }

  generarVTexto() {
    // TODO: probar funcionalidad de mensajeria de texto
    let operacion;
    let cedula;
    let tarjeta;
    let cedulaVal, tarjetaVal;
    const numeroVtexto = '282';
    const regexNumeros = /[^0-9]/gi;

    if ($('.actform:visible').length !== 0) {
       operacion = ( document.getElementById('operAc') as HTMLInputElement).value;
       cedulaVal = ( document.getElementById('cedulaAc') as HTMLInputElement).value.trim();
       cedula = cedulaVal.replace(regexNumeros, ''); // Remover chars especiales
       tarjetaVal = ( document.getElementById('numtarjAc') as HTMLInputElement).value.trim();
       tarjeta = tarjetaVal.replace(regexNumeros, ''); // Remover chars especiales
       console.log('Op: ' + operacion + ' Ced: ' + cedula + ' Tarj: ' + tarjeta);
    } else {
       operacion = ( document.getElementById('operBloq') as HTMLInputElement).value;
       cedulaVal = ( document.getElementById('cedulaBloq') as HTMLInputElement).value.trim();
       cedula = cedulaVal.replace(regexNumeros, ''); // Remover chars especiales
       tarjetaVal = ( document.getElementById('numtarjBloq') as HTMLInputElement).value.trim();
       tarjeta = tarjetaVal.replace(regexNumeros, ''); // Remover chars especiales
       console.log('Op: ' + operacion + ' Ced: ' + cedula + ' Tarj: ' + tarjeta);
    }

    if (operacion === '') {
      alert('Debe seleccionar una operación.');
      return false;
    } else if (tarjeta.length !== 16) {
      alert('Numero de tarjeta inválido.');
      return false;
    } else if (cedula.length < 7) {
      alert('Numero de cédula inválido.');
      return false;
    }

    const mensajeFinal = operacion + ' ' + cedula + ' ' + tarjeta;

    if (this.sms.hasPermission) {
      this.sms.send(numeroVtexto, mensajeFinal);
    } else {
      alert('Debe habilitar la aplicación para el envio de SMS.');
    }
  }

  mostrarSiguiente() {
    if ($('.bloqueoform:visible').length === 0) {
      $('.actform').hide();
      $('.bloqueoform').show();
      $('.funcbuttonbloq').prop('disabled', true);
      $('.funcbuttonact').prop('disabled', false);
    } else {
      $('.bloqueoform').hide();
      $('.actform').show();
      $('.funcbuttonact').prop('disabled', true);
      $('.funcbuttonbloq').prop('disabled', false);
    }
  }
}
