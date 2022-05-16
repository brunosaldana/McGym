import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { Actividad } from 'src/app/models/actividad';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmplogService } from 'src/app/services/emplog.service';



@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor(public actividadesService:ActividadesService,private EmplogService:EmplogService,private cookieService: CookieService, public router : Router) {    
    
  }
  validation(_form: NgForm){
    console.log("valida")

  }

  ngOnInit(): void {
    var cookieValue = this.cookieService.get("email-token")
    this.EmplogService.isMonitor(cookieValue).subscribe(
      res => {
        console.log("---------")
        console.log(res)
        console.log("---------")  
        if(res){
          console.log("Sí!!!!")
          console.log(cookieValue+" cookie");
          this.router.navigate(["/actividades"])
          this.getActividades();
        } else {
          console.log("Nooooooo :-(")
          this.router.navigate(["/main"])
        }
      },
      err => {
        console.log(err)
        console.log("404 :-(")
        this.router.navigate(["/main"])
    }
     )
  }

  resetForm(_form: NgForm){
    location.reload();
  }


  getActividades(){
     this.actividadesService.getActividades().subscribe(
      res => {
        this.actividadesService.actividades = res;

      },
      err => console.log(err)
    )
  }

  addActividad(form: NgForm){
    if(form.value._id) {
      this.actividadesService.putActividad(form.value).subscribe(
        res =>{ 
          console.log(res)
          location.reload();
        },
        (err) => console.error(err)
        
      )
    } else {
      this.actividadesService.createActividad(form.value).subscribe(
        _res => {
          this.getActividades();
          form.reset();
        },
        err => console.log(err)
      
    );
    }
  }
  deleteActividad(id: string){
    if(confirm('Seguro? ')){
      this.actividadesService.deleteActividad(id).subscribe(
      (_res) => {
        this.getActividades();
      },
      (err) => console.error(err)
      );
    }
  }
  editActividad(actividad: Actividad){
    this.actividadesService.selectedActividad = actividad;

  }

}
