import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Employee } from 'src/app/models/employee';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(public ActividadService: ActividadesService,private cookieService: CookieService, public router : Router) {    
    
  }

  ngOnInit(): void { 
    this.getEmployees();
    if(this.cookieService.get('sesion-token')){
      this.router.navigate(["/reserva"])
    }else{
      this.router.navigate([""])

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
