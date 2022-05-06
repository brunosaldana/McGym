import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Employee } from 'src/app/models/employee';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(public ActividadService: ActividadesService) {    
    
  }

  ngOnInit(): void { 
    this.getEmployees();
  }
  
  getEmployees(){
     this.ActividadService.getActividades().subscribe(
      res => {
        this.ActividadService.actividades = res;

      },
      err => console.log(err)
    )
  }



}
