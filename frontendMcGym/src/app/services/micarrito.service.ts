import { Injectable } from '@angular/core';
import { miCarrito } from '../models/miCarrito';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class MicarritoService {
  [x: string]: any;

  URL_API = environment.api + '/prod';

  selectedMisActividades: miCarrito = {
    _id: '',
    name: '',
    descripcion: '',
    precio: '',
    cliId: ''
  };


miCarrito: miCarrito[] = [];
controls: any;

constructor(private http: HttpClient, public cookieService: CookieService) {}

getMisProductos(){
  console.log("entra aqui tambien")
  const cid = this.cookieService.get('sesion-token')
  return this.http.get<miCarrito[]>(this.URL_API+ `/${cid}`);
  
}

deleteProducto(_id:string){
  return this.http.delete(`${this.URL_API}/${_id}`)
}
}
