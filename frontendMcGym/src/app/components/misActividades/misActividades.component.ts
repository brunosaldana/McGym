import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-actividades',
  templateUrl: './misActividades.component.html',
  styleUrls: ['./misActividades.component.css']
})
export class misActividadesComponent implements OnInit {

  constructor(private cookieService: CookieService, public router : Router) { 
  
  }

  ngOnInit(): void {
    if(this.cookieService.get('sesion-token')){
      this.router.navigate(["/misActividades"])
    }else{
      this.router.navigate([""])

    }
  }

  salir(){
    this.cookieService.delete('sesion-token')
  }

}
