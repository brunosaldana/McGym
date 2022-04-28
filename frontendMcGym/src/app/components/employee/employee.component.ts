import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  

  createFormGroup(){

    return new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      ocupacion: new FormControl('',[Validators.required])
    })
  }
  

  constructor(public employeeService: EmployeeService) { 
    
    
  }

  ngOnInit(): void { 
    
    
    
    this.getEmployees();
  }

  resetForm(form: NgForm){
    form.reset();
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
    this.employeeService.createEmployee(form.value).subscribe(
      res => {
        this.getEmployees();
        form.reset();
      },
      err => console.log(err)
      
    )
  }

  deleteEmployee(id: string){
    if(confirm('Seguro? ')){
      this.employeeService.deleteEmployee(id).subscribe(
      (res) => {
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
