import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { AbstractControl, NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent implements OnInit {
  
  constructor(public employeeService: EmployeeService) {    
    
  }


  validation(_form: NgForm){
    console.log("valida")

  }

  ngOnInit(): void { 
    this.getEmployees();
  }

  resetForm(_form: NgForm){
    location.reload();
  }


  getEmployees(){
     this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;

      },
      err => console.log(err)
    )
  }

  addEmployee(form: NgForm){
    if(form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe(
        res =>{ 
          console.log(res)
          location.reload();
        },
        (err) => console.error(err)
        
      )
    } else {
      this.employeeService.createEmployee(form.value).subscribe(
        _res => {
          this.getEmployees();
          form.reset();
        },
        err => console.log(err)
      
    );
    }
  }

  deleteEmployee(id: string){
    if(confirm('Seguro? ')){
      this.employeeService.deleteEmployee(id).subscribe(
      (_res) => {
        this.getEmployees();
      },
      (err) => console.error(err)
      );
    }
  }
  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;

  }



}
