import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { Actividad } from 'src/app/models/actividad';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor(public actividadesService:ActividadesService) {    
    
  }
  validation(_form: NgForm){
    console.log("valida")

  }

  ngOnInit(): void { 
    this.getActividades();
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
