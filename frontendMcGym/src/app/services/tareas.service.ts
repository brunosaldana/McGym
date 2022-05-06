import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Tareas } from '../models/tareas';

Injectable({
  providedIn: 'root'
})
export class TareasService {
  
  URL_API = 'http://localhost:4000/Tareas';

  selectedTareas: Tareas = {
    nametec: '',
    namemon: '',
    fecha: '',
    hora: '',
    incidencia: '',
    _id: ''
  };
  

  tareas: Tareas[] = [];
  controls: any;


  constructor(private http: HttpClient) {

  }
  

  getTareas(){
    return this.http.get<Tareas[]>(this.URL_API);
    
  }
  createTareas(tarea: Tareas){
      
      return this.http.post(this.URL_API,tarea);   
  }

  putTareas(tarea: Tareas) {
    return this.http.put(this.URL_API + `/${tarea._id}`, tarea);
  
  }

  deleteTareas(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }


}
