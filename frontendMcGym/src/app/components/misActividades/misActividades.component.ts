import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-actividades',
  templateUrl: './misActividades.component.html',
  styleUrls: ['./misActividades.component.css']
})
export class misActividadesComponent implements OnInit {

  constructor(public ActividadService: ActividadesService,private cookieService: CookieService, public router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
    console.log("funciona")
    if (!this.cookieService.get('sesion-token')){
      this.router.navigate(["/"])
    }
  }

  getEmployees(){
    this.ActividadService.getActividades().subscribe(
     res => {
       this.ActividadService.actividades = res;

     },
     err => console.log(err)
   )
 }

  salir(){
    this.cookieService.delete('sesion-token')
  }

}
