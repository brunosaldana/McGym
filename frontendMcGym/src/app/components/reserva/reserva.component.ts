import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(public employeeService: EmployeeService) {    
    
  }

  ngOnInit(): void { 
    this.getEmployees();
  }



  getEmployees(){
     this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;

      },
      err => console.log(err)
    )
  }

}
