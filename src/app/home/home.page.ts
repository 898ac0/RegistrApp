import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {

    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.usuario=this.router.getCurrentNavigation().extras.state.usuario;
        console.log(this.usuario);
      }

    });

  }
  ngOnInit() {

  }
}
