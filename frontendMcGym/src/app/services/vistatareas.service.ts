import { Injectable } from '@angular/core';
import { vistaTarea } from '../models/vistatareas';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';




@Injectable({
  providedIn: 'root'
})
export class vistaTareaService {
  [x: string]: any;

  URL_API = environment.api + '/Vistatareas';

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
