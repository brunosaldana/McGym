import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Email } from '../models/email';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  URL_API = 'http://localhost:4000';

  selectedEmployee: Email = {
      email: ''
    };
  

  employees: Email[] = [];


  constructor(private http: HttpClient) {}


    

}
