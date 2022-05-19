import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  [x: string]: any;
  
  URL_API = environment.api + '/Clientes';

  selectedCliente: Cliente = {
      _id: '',
      name: '',
      apellido: '',
      telefono: '',
      datanaixement: '',
      email: '',
      dni: '',
      password: '',
    };
  

  clientes: Cliente[] = [];
  controls: any;


  constructor(private http: HttpClient) {

  }
  

  getClientes(){
    return this.http.get<Cliente[]>(this.URL_API);
    
  }
  createCliente(cliente: Cliente){
      
      return this.http.post(this.URL_API,cliente);   
  }

  putCliente(cliente: Cliente) {
    return this.http.put(this.URL_API + `/${cliente._id}`, cliente);
  
  }

  deleteCliente(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }


}
