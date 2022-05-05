import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
  
})
export class ClienteComponent implements OnInit {

  constructor(public clienteService: ClienteService) {    
    
  }
  validation(_form: NgForm){
    console.log("valida")

  }

  ngOnInit(): void { 
    this.getClientes();
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
