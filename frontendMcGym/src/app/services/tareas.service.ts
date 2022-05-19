import { Injectable } from '@angular/core';
import { Tarea } from '../models/tareas';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class TareaService {
  [x: string]: any;

  URL_API = environment.api + '/Tareas';

  selectedTarea: Tarea = {
    _id: '',
    namemon: '',
    nametec: '',
    fecha: '',
    hora: '',
    incidencia: '',
    };


    tareas: Tarea[] = [];
    controls: any;
  
  
    constructor(private http: HttpClient) {
  
    }
    getTareas(){
      return this.http.get<Tarea[]>(this.URL_API);
      
    }
    createTarea(cliente: Tarea){
        
        return this.http.post(this.URL_API,cliente);   
    }
  
    putTarea(cliente: Tarea) {
      return this.http.put(this.URL_API + `/${cliente._id}`, cliente);
    
    }
  
    deleteTarea(_id: string){
      return this.http.delete(`${this.URL_API}/${_id}`)
    }
}
