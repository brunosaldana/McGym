import { Component, OnInit } from '@angular/core';
import { MisActividadesService } from 'src/app/services/mis-actividades.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/models/carrito'; 
import { MicarritoService } from 'src/app/services/micarrito.service';


@Component({
  selector: 'app-micarrito',
  templateUrl: './micarrito.component.html',
  styleUrls: ['./micarrito.component.css']
})
export class MicarritoComponent implements OnInit {

  constructor(public MicarritoService:MicarritoService,public misActividadesService: MisActividadesService,private cookieService: CookieService, public router : Router) { }

  ngOnInit(): void {
    this.getMisProductos();
    if (!this.cookieService.get('sesion-token')){
      this.router.navigate(["/"])
    }
  }
  
  getMisProductos(){
    console.log("entra aqui")
    
    this.MicarritoService.getMisProductos().subscribe(
     res => {
       this.MicarritoService.miCarrito = res;
     },
     err => console.log(err)
   )
 }

 deleteProduct(producto:Carrito){
  var u = JSON.stringify(producto);
  var e = JSON.parse(u);
  if(confirm('Seguro? ')){
    this.MicarritoService.deleteProducto(e._id).subscribe(
    (_res) => {
      this.getMisProductos();
    },
    (err) => console.error(err)
    );
  alert("Producto eliminado de la cesta")

  }
}



  salir(){
    this.cookieService.delete('sesion-token')
  }

}
