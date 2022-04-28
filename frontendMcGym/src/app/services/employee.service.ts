import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  URL_API = 'http://localhost:4000';

  selectedEmployee: Employee = {
      id: '',
      name: '',
      email: '',
      ocupacion: '',
      _id: ''
    };
  

  employees: Employee[] = [];


  constructor(private http: HttpClient) {}


  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API);
    
  }
  createEmployee(employee: Employee){
    return this.http.post(this.URL_API,employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }


}
