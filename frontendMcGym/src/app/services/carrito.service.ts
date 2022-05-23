import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrito } from '../models/carrito';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  URL_API = 'http://localhost:4000/tienda';


  selectedCarrito: Carrito = {
      _id: '',
      name: '',
      descripcion: '',
      precio: '',
    };
  

  carrito: Carrito[] = [];
  controls: any;


  constructor(private http: HttpClient) {

  }
  

  getCarrito(){
    return this.http.get<Carrito[]>(this.URL_API);
    
  }
  createCarrito(carrito: Carrito){
      
      return this.http.post(this.URL_API,carrito);   
  }

  putCarrito(carrito: Carrito) {
    return this.http.put(this.URL_API + `/${carrito._id}`, carrito);
  
  }

  deleteCarrito(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }


}
