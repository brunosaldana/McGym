import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Carrito } from 'src/app/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { EmplogService } from 'src/app/services/emplog.service';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private EmplogService:EmplogService,public CarritoService: CarritoService,private cookieService: CookieService, public router : Router) {    
    
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
          this.router.navigate(["/tienda"])
          this.getCarrito();
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


  getCarrito(){
     this.CarritoService.getCarrito().subscribe(
      res => {
        this.CarritoService.carrito = res;

      },
      err => console.log(err)
    )
  }

  addCarrito(form: NgForm){
    if(form.value._id) {
      this.CarritoService.putCarrito(form.value).subscribe(
        res =>{ 
          console.log(res)
          location.reload();
        },
        (err) => console.error(err)
        
      )
    } else {
      this.CarritoService.createCarrito(form.value).subscribe(
        _res => {
          this.getCarrito();
          form.reset();
        },
        err => console.log(err)
      
    );
    }
  }
  deleteCarrito(id: string){
    if(confirm('Seguro? ')){
      this.CarritoService.deleteCarrito(id).subscribe(
      (_res) => {
        this.getCarrito();
      },
      (err) => console.error(err)
      );
    }
  }
  editCarrito(carrito: Carrito){
    this.CarritoService.selectedCarrito = carrito;

  }
  
}
