import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MonitoresService } from 'src/app/services/monitores.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent implements OnInit {
  
  constructor(public employeeService: EmployeeService,public MonitoresService: MonitoresService) {    
    
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

    if(form.value.ocupacion=="Monitor"){  
      console.log("monitor")
      this.MonitoresService.createMonitor(form.value).subscribe(
        _res => {
        },
        err => console.log(err)
      
    );
    }else{
      console.log("Tecnico")
    }
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
