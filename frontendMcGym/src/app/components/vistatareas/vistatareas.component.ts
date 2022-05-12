import { Component, OnInit } from '@angular/core';
import { vistaTarea } from 'src/app/models/vistatareas';
import { vistaTareaService } from 'src/app/services/vistatareas.service';
import { TareaService } from 'src/app/services/tareas.service';
import { CookieService } from 'ngx-cookie-service';
import { Tarea } from 'src/app/models/tareas';


@Component({
  selector: 'app-vistatareas',
  templateUrl: './vistatareas.component.html',
  styleUrls: ['./vistatareas.component.css']
})

export class VistatareasComponent implements OnInit {

    constructor(public vistatareaService: vistaTareaService,public tareaService: TareaService,private cookieService: CookieService) {    
      
    }
  
    ngOnInit(): void { 
      this.getTareas();
    }
 
    getTareas(){
       this.tareaService.getTareas().subscribe(
        res => {
          this.tareaService.tareas = res;
  
        },
        err => console.log(err)
      )
    } 
    deleteTarea(tareas:Tarea){
      var u = JSON.stringify(tareas);
      var e = JSON.parse(u);
      if(confirm(' Borrar solo si ya ha sido realizada la tarea. ')){
        this.tareaService.deleteTarea(e._id).subscribe(
        (_res) => {
          this.getTareas();
        },
        (err) => console.error(err)
        );
      }
    } 
    salir(){
      this.cookieService.delete('sesion-token')
   
  }
}

