import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../models/result';


@Injectable({
  providedIn: 'root'
})
export class EmplogService {
  private URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  isEmpleado(user:string){
    console.log("es empleado?")
    return this.http.post<Result>(this.URL + '/emp', user)
  }
}
