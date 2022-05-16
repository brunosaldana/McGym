import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MonitoresService } from 'src/app/services/monitores.service';
import { TecnicosService } from 'src/app/services/tecnicos.service';
import { CookieService } from 'ngx-cookie-service';
import { EmplogService } from 'src/app/services/emplog.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent implements OnInit {
  es: any;
  
  constructor(private EmplogService:EmplogService,private cookieService: CookieService,public employeeService: EmployeeService,public MonitoresService: MonitoresService,
    public TecnicosServices: TecnicosService,public router : Router) {    
    
  }


  validation(_form: NgForm){
    console.log("valida")

  }

  ngOnInit() { 
     var cookieValue = this.cookieService.get('email-token')
     var es =this.EmplogService.isMonitor(cookieValue).subscribe(
      res => {
        console.log("---------")
        console.log(res)
        console.log("---------")  
        if(res){
          console.log("Sí!!!!")
          console.log(cookieValue+" cookie");
          this.router.navigate(["/empleados"])
          this.getEmployees();
        } else {
          console.log("Nooooooo :-(")
          this.router.navigate(["/main"])
        }
      },
      err => {
        console.log(err)
        console.log("404 :-(")
        this.router.navigate(["/main"])
    }
     )

  }

  resetForm(_form: NgForm){
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
    }else if(form.value.ocupacion=="Tecnico"){
      console.log("Tecnico")
      this.TecnicosServices.createTecnico(form.value).subscribe(
        _res => {
        },
        err => console.log(err)
      
    );
    }
    }
  }

  deleteEmployee(id: string,email:string){
    if(confirm('Seguro? ')){
      this.employeeService.deleteEmployee(id).subscribe(
      (_res) => {
        this.getEmployees();
      },
      (err) => console.error(err)
      );

      
// borrar monitor si esta en la tabla
      this.MonitoresService.deleteMonitor(email).subscribe(
        (_res) => {
        },
        (err) => console.error(err)
        );


//borrar tecnico si esta en la tabla 
        this.TecnicosServices.deleteTecnico(email).subscribe(
          (_res) => {
          },
          (err) => console.error(err)
          );


    }
  }
  editEmployee(employee: Employee){
    console.log("employe edit")
    this.employeeService.selectedEmployee = employee;
    
  }

  editMonitor(employee: Employee){
    console.log("monitor edit")
    this.MonitoresService.selectedMonitor = employee;
  }
  
  

}
