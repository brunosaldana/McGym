import { Injectable } from '@angular/core';
import { vistaTarea } from '../models/vistatareas';
import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class vistaTareaService {
  [x: string]: any;

  URL_API = 'http://localhost:4000/Vistatareas';

  selectedvistaTarea: vistaTarea = {
    _id: '',
    namemon: '',
    nametec: '',
    fecha: '',
    hora: '',
    incidencia: '',
    };


    vistatareas: vistaTarea[] = [];
    controls: any;
  
  
    constructor(private http: HttpClient) {
  
    }
    getTareas(){
      return this.http.get<vistaTarea[]>(this.URL_API);
      
    }
    deleteTarea(_id: string){
      return this.http.delete(`${this.URL_API}/${_id}`)
    }
}
