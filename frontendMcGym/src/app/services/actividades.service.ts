import { Injectable } from '@angular/core';
import {Actividad} from '../models/actividad'
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  [x: string]: any;

  URL_API = 'http://localhost:4000/Actividades';

  selectedActividad: Actividad = {
    _id: '',
    name: '',
    impartemon: '',
    dia: '',
    hora: '',
    duracion: '',
  };


actividades: Actividad[] = [];
controls: any;


  constructor(private http: HttpClient) {

  }


  getActividades(){
    return this.http.get<Actividad[]>(this.URL_API);
    
  }
  createActividad(actividad: Actividad){
      
      return this.http.post(this.URL_API,actividad);   
  }

  putActividad(actividad: Actividad) {
    return this.http.put(this.URL_API + `/${actividad._id}`, actividad);
  
  }

  deleteActividad(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
