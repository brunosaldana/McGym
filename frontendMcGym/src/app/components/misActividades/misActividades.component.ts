import { Component, OnInit } from '@angular/core';
import { MisActividadesService } from 'src/app/services/mis-actividades.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';




@Component({
  selector: 'app-actividades',
  templateUrl: './misActividades.component.html',
  styleUrls: ['./misActividades.component.css']
})
export class misActividadesComponent implements OnInit {

  constructor(public misActividadesService: MisActividadesService,private cookieService: CookieService, public router : Router) { }

  ngOnInit(): void {
    this.getMisActividades();
    console.log("funciona")
    if (!this.cookieService.get('sesion-token')){
      this.router.navigate(["/"])
    }
  }

  getMisActividades(){
    this.misActividadesService.getMisActividades().subscribe(
     res => {
       this.misActividadesService.misActividades = res;
     },
     err => console.log(err)
   )
 }

 deleteReserva(actividad:Actividad){
  var u = JSON.stringify(actividad);
  var e = JSON.parse(u);
  if(confirm('Seguro? ')){
    this.misActividadesService.deleteReserva(e._id).subscribe(
    (_res) => {
      this.getMisActividades();
    },
    (err) => console.error(err)
    );
    alert("Reserva Cancelada con exito")
  }

}



  salir(){
    this.cookieService.delete('sesion-token')
  }

}
