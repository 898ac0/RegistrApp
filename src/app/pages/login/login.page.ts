import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  password: string;
  loginForm: FormGroup;
  constructor(
    public toastController: ToastController, private router: Router, private formBuilder: FormBuilder, private storagedb: StorageService
    ) { }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration:4000
    });
    toast.present();
  }

  submit() {
    if (!this.storagedb.validLogin(this.user, this.password)) {
      return;
    }

    const navigationextras: NavigationExtras = {
      state: { user: this.user } 
    };
  
    this.presentToast('Bienvenido ' + this.user);
    this.router.navigate(['/home'], navigationextras);
    console.log(this.loginForm.value);
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, Validators.required]
    });
  }
}