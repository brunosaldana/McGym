import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class EmplogService {
  private URL = environment.api


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

  isCliente(token:string){
    console.log("es cliente?")
    console.log(token)
    return this.http.post(this.URL + '/cli/' + token, token)
  }


  resPasscli(email:string,contra:string){
    console.log("email: "+email+" contraseña: "+contra )
    return this.http.get(this.URL + '/' + email + '/' + contra);
  }

  resPassemp(email:string,contra:string){
    console.log("email: "+email+" contraseña: "+contra )
    return this.http.get(this.URL + '/' + email + '/' + contra);
  }
}
