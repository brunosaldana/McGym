import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  login(user: any){
    return this.http.post(this.URL + '/login', user);
  }

  idExists(user:any){
    return this.http.post(this.URL + '/id', user)
  }
}
