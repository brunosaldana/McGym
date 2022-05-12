import { Injectable } from '@angular/core';
import { Tipoempl } from '../models/tipoempl';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TecnicosService {


  URL_API = 'http://localhost:4000/tecnico';

  selectedTecnico: Tipoempl = {
    _id: '',
    name: '',
    apellido: '',
    telefono: '',
    datanaixement: '',
    email: '',
    dni: '',
    password: ''
  };

  tecnicos: Tipoempl[] = [];
  controls: any;

  constructor(private http: HttpClient) {

   }

  createTecnico(tecnico: Tipoempl){
      
    return this.http.post(this.URL_API,tecnico);   
}


deleteTecnico(email: string){
  return this.http.delete(`${this.URL_API}/${email}`)
}
}