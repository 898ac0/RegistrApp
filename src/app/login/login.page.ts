import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  constructor(public toastController: ToastController, private router: Router) { }
  iniciar(){

    this.presentToast ("Has ingresado sesión correctamente");

    let navigationExtras: NavigationExtras={
      state: {usuario: this.usuario}
    }

    this.router.navigate(['/home'], navigationExtras)
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
