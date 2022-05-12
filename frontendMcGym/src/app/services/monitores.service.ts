import { Injectable } from '@angular/core';
import { Monitor } from '../models/monitor';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MonitoresService {

  URL_API = 'http://localhost:4000/monitor';

  selectedMonitor: Monitor = {
    _id: '',
    name: '',
    apellido: '',
    telefono: '',
    datanaixement: '',
    email: '',
    dni: '',
    password: ''
  };

  monitores: Monitor[] = [];
  controls: any;

  constructor(private http: HttpClient) {

   }

  createMonitor(monitor: Monitor){
      
    return this.http.post(this.URL_API,monitor);   
}

}
