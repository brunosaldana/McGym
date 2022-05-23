import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CookieService } from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class MisProductosService {

  [x: string]: any;

  URL_API = environment.api + '/prod';

  selectedCarrito: Carrito = {
    _id: "",
    name: "",
    descripcion: "",
    precio: "",
  };


micarrito: Carrito[] = [];
controls: any;



constructor(private http: HttpClient, public cookieService: CookieService) {

}



add(producto:Carrito){
  const cid = this.cookieService.get('sesion-token')
  console.log(this.URL_API)
  return this.http.post(this.URL_API+`/${cid}`,producto);

}

}
