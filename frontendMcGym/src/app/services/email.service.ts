import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Email } from '../models/email';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  URL_API = environment.api + '/envio/';

  selectedEmail: Email = {
      email: ''
    };
  

  employees: Email[] = [];


  constructor(private http: HttpClient) {}

  envioCorreo(envio: Email){
    return this.http.post(this.URL_API, envio);   
}


    

}
