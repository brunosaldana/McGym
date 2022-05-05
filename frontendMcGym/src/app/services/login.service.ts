import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost4000'

  constructor(private http: HttpClient) { }

  login(user: any){
    return this.http.post<any>(this.URL+'/clientes', user);
  }
}
