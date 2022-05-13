import { Injectable } from '@angular/core';
import { Tipoempl } from '../models/tipoempl';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MonitoresService {

  URL_API = 'http://localhost:4000/monitor';

  selectedMonitor: Tipoempl = {
    _id: '',
    name: '',
    apellido: '',
    telefono: '',
    datanaixement: '',
    email: '',
    dni: '',
    password: ''
  };

  monitores: Tipoempl[] = [];
  controls: any;

  constructor(private http: HttpClient) {

   }



  createMonitor(monitor: Tipoempl){
    return this.http.post(this.URL_API,monitor);   
  }

  deleteMonitor(email: string){
    return this.http.delete(`${this.URL_API}/${email}`)
  }

  putMonitor(monitores: Tipoempl) {
    console.log("entro")
    return this.http.put(this.URL_API + `/${monitores.email}`, monitores);
  
  }

}
