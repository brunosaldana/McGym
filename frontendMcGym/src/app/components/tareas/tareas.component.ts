import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarea } from 'src/app/models/tareas';
import { TareaService } from 'src/app/services/tareas.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareaComponent implements OnInit {

  constructor(public tareaService: TareaService) {    
    
  }
  validation(_form: NgForm){
    console.log("OKEYYYY")

  }

  ngOnInit(): void { 
    this.getTareas();
  }

  resetForm(_form: NgForm){
    location.reload();
  }


  getTareas(){
     this.tareaService.getTareas().subscribe(
      res => {
        this.tareaService.tareas = res;

      },
      err => console.log(err)
    )
  }

  addTarea(form: NgForm){
    if(form.value._id) {
      this.tareaService.putTarea(form.value).subscribe(
        res =>{ 
          console.log(res)
          location.reload();
        },
        (err) => console.error(err)
        
      )
    } else {
      this.tareaService.createTarea(form.value).subscribe(
        _res => {
          this.getTareas();
          form.reset();
        },
        err => console.log(err)
      
    );
    }
  }
  deleteTarea(id: string){
    if(confirm('Seguro? ')){
      this.tareaService.deleteTarea(id).subscribe(
      (_res) => {
        this.getTareas();
      },
      (err) => console.error(err)
      );
    }
  }

  editTarea(cliente: Tarea){
    this.tareaService.selectedTarea = cliente;

  }
}
