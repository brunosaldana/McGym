import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Email } from '../models/email';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  URL_API = 'http://localhost:4000/envio';

  selectedEmail: Email = {
      email: ''
    };
  

  employees: Email[] = [];


  constructor(private http: HttpClient) {}

  envioCorreo(envio: Email){
      console.log(envio + " hesste es el hemail") 
    return this.http.post(this.URL_API, envio);   
}


    

}
