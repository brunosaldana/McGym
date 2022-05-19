import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = environment.api

  constructor(private http: HttpClient) { }

  login(user: any){
    return this.http.post(this.URL + '/login', user);
  }

  idExists(user:any){
    return this.http.post(this.URL + '/id', user)
  }

}
