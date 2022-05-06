import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tareas } from 'src/app/models/tareas';
import { TareasService } from 'src/app/services/tareas.service'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(public tareasService: TareasService) {    

   }
validation(_form: NgForm){
    console.log("valida")

  }

  ngOnInit(): void { 
    this.getTareas();
  }

  resetForm(_form: NgForm){
    location.reload();
  }


  getTareas(){
     this.tareasService.getTareas().subscribe(
      res => {
        this.tareasService.tareas = res;

      },
      err => console.log(err)
    )
  }

  addTareas(form: NgForm){
    if(form.value._id) {
      this.tareasService.putTareas(form.value).subscribe(
        res =>{ 
          console.log(res)
          location.reload();
        },
        (err) => console.error(err)
        
      )
    } else {
      this.tareasService.createTareas(form.value).subscribe(
        _res => {
          this.getTareas();
          form.reset();
        },
        err => console.log(err)
      
    );
    }
  }
  deleteTareas(id: string){
    if(confirm('Seguro? ')){
      this.tareasService.deleteTareas(id).subscribe(
      (_res) => {
        this.getTareas();
      },
      (err) => console.error(err)
      );
    }
  }
  editTarea(tareas: Tareas){
    this.tareasService.selectedTareas = tareas;

  }
  
}
