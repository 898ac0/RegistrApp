import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  constructor(public toastController: ToastController) { }

  restablecer(){
  this.presentToast ("Se ha enviado la contraseña de recuperación a tu correo electrónico.");
}

async presentToast(msg:string) {
  const toast = await this.toastController.create({
    message: msg,
    duration:4000
  });
  toast.present();
}
  ngOnInit() {
  }

}
