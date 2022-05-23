import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';
import { MisActividadesService } from 'src/app/services/mis-actividades.service';

import { Employee } from 'src/app/models/employee';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';






@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(public misActividadesService: MisActividadesService,public ActividadService: ActividadesService,private cookieService: CookieService, public router : Router) {    
    
  }

  ngOnInit(): void { 
    this.getActivities();
    if(this.cookieService.get('sesion-token')){
      this.router.navigate(["/reserva"])
    }else{
      this.router.navigate([""])

    }
  }
  
  getActivities(){
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

  reservar(actividad:Actividad){

      var u = JSON.stringify(actividad);
      var e = JSON.parse(u);
      console.log(u)
    this.misActividadesService.createMisActividades(e).subscribe(
      _res => {

        this.getActivities();
      },
      err => console.log(err)
    
  );
  alert("Reserva Realizada")


  }




  tokenSesion=(this.cookieService.get('sesion-token'))



}


