import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MisActividades} from '../models/mis-actividades'
import { CookieService } from 'ngx-cookie-service';
import { Actividad } from '../models/actividad';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class MisActividadesService {
  [x: string]: any;

  URL_API = environment.api + '/misActividades';

  selectedMisActividades: MisActividades = {
    _id: '',
    name: '',
    impartemon: '',
    dia: '',
    hora: '',
    duracion: '',
    cliId: ''
  };


misActividades: MisActividades[] = [];
controls: any;


  constructor(private http: HttpClient, public cookieService: CookieService) {

  }


  getMisActividades(){
    const cid = this.cookieService.get('sesion-token')
    return this.http.get<MisActividades[]>(this.URL_API+ `/${cid}`);
    
  }

  createMisActividades(actividad:Actividad){
    const cid = this.cookieService.get('sesion-token')
    return this.http.post(this.URL_API+`/${cid}`,actividad);
 
  }

  deleteReserva(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }


  // putReserva(actividad:Actividad){
  //   const cid = this.cookieService.get('sesion-token')
  //   return this.http.put(this.URL_API + `/${actividad._id}`, actividad);
  // }

}
