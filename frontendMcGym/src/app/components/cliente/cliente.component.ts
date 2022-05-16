import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/clientes.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { EmplogService } from 'src/app/services/emplog.service';




@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
  
})
export class ClienteComponent implements OnInit {

  constructor(private EmplogService:EmplogService,public clienteService: ClienteService,private cookieService: CookieService, public router : Router) {    
    
  }
  validation(_form: NgForm){
    console.log("valida")

  }

  ngOnInit(): void { 
    var cookieValue = this.cookieService.get("email-token")
    this.EmplogService.isEmpleado(cookieValue).subscribe(
      res => {
        console.log("---------")
        console.log(res)
        console.log("---------")  
        if(res){
          console.log("Sí!!!!")
          console.log(cookieValue+" cookie");
          this.router.navigate(["/clientes"])
          this.getClientes();
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
    location.reload();
  }


  getClientes(){
     this.clienteService.getClientes().subscribe(
      res => {
        this.clienteService.clientes = res;

      },
      err => console.log(err)
    )
  }

  addCliente(form: NgForm){
    if(form.value._id) {
      this.clienteService.putCliente(form.value).subscribe(
        res =>{ 
          console.log(res)
          location.reload();
        },
        (err) => console.error(err)
        
      )
    } else {
      this.clienteService.createCliente(form.value).subscribe(
        _res => {
          this.getClientes();
          form.reset();
        },
        err => console.log(err)
      
    );
    }
  }
  deleteCliente(id: string){
    if(confirm('Seguro? ')){
      this.clienteService.deleteCliente(id).subscribe(
      (_res) => {
        this.getClientes();
      },
      (err) => console.error(err)
      );
    }
  }
  editCliente(cliente: Cliente){
    this.clienteService.selectedCliente = cliente;

  }
  
}
