import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../models/result';


@Injectable({
  providedIn: 'root'
})
export class EmplogService {
  private URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  isEmpleado(token:string){
    console.log("es empleado?")
    console.log(token)
    return this.http.post(this.URL + '/emp/' + token, token)
  }

  isMonitor(token:string){
    console.log("es monitor?")
    console.log(token)
    return this.http.post(this.URL + '/mon/' + token, token)
  }

  isTecnico(token:string){
    console.log("es tecnico?")
    console.log(token)
    return this.http.post(this.URL + '/tec/' + token, token)
  }
}
