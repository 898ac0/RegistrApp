import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiclientService } from '../servicios/apiclient.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any;
  clave: any;
  constructor(public toastController: ToastController, private router: Router, private api: ApiclientService) { }
  ionViewWillEnter(){
    this.getUsuarios();
    this.getClaves();
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe((data)=>{
      this.usuario=data;
    });
  }

  getClaves() {
    this.api.getClaves().subscribe((data)=>{
      this.clave=data;
    })
  }
  
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
