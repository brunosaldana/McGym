import { Injectable } from '@angular/core';
import { Tipoempl } from '../models/tipoempl';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class TecnicosService {


  URL_API = environment.api + '/tecnico';

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