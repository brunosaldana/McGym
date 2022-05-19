import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';
import { environment } from 'src/environments/environment.prod';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  URL_API = environment.api + '/Empleados';

  selectedEmployee: Employee = {
      _id: '',
      name: '',
      apellido: '',
      telefono: '',
      datanaixement: '',
      email: '',
      dni: '',
      password: '',
      ocupacion: ''
    };
  

  employees: Employee[] = [];
  controls: any;


  constructor(private http: HttpClient) {

  }
  

  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API);
    
  }
  createEmployee(employee: Employee){
      
      return this.http.post(this.URL_API,employee);   
  }

  putEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  
  }

  deleteEmployee(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }


}
