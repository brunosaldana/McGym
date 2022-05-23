import { Component, OnInit } from '@angular/core';
import { MisProductosService } from 'src/app/services/vistaTienda.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/models/carrito';



@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(public CarritoService:CarritoService,public MiCarritoService: MisProductosService,private cookieService: CookieService, public router : Router) { }

  ngOnInit(): void {
    this.getCarrito();
    console.log("funciona")
    if (!this.cookieService.get('sesion-token')){
      this.router.navigate(["/"])
    }
  }

  getCarrito(){
    this.CarritoService.getCarrito().subscribe(
     res => {
       this.CarritoService.carrito = res;

     },
     err => console.log(err)
   )
 }

 add(producto:Carrito){
    var u = JSON.stringify(producto);
    var e = JSON.parse(u);
    console.log(u)
    this.MiCarritoService.add(e).subscribe(
      _res => {

        this.getCarrito();
      },
      err => console.log(err)
    
  );
  alert("Producto añadido con exito")

}



  salir(){
    this.cookieService.delete('sesion-token')
  }

}
