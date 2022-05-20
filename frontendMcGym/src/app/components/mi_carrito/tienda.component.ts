// import { Component, OnInit } from '@angular/core';
// import { MiCarritoService } from 'src/app/services/';
// import { CookieService } from 'ngx-cookie-service';
// import { Router } from '@angular/router';
// import { Carrito } from 'src/app/models/carrito';



// @Component({
//   selector: 'app-tienda',
//   templateUrl: './tienda.component.html',
//   styleUrls: ['./tienda.component.css']
// })
// export class TiendaComponent implements OnInit {

//   constructor(public MiCarritoService: MiCarritoService,private cookieService: CookieService, public router : Router) { }

  // ngOnInit(): void {
  //   this.getMiCarrito();
  //   console.log("funciona")
  //   if (!this.cookieService.get('sesion-token')){
  //     this.router.navigate(["/"])
  //   }
  // }

//   getMiCarrito(){
//     this.miCarritoService.getMiCarrito().subscribe(
//      res => {
//        this.misActividadesService.misActividades = res;
//      },
//      err => console.log(err)
//    )
//  }

//  deleteReserva(actividad:Actividad){
//   var u = JSON.stringify(actividad);
//   var e = JSON.parse(u);
//   if(confirm('Seguro? ')){
//     this.misActividadesService.deleteReserva(e._id).subscribe(
//     (_res) => {
//       this.getMisActividades();
//     },
//     (err) => console.error(err)
//     );
//   }
// }



//   salir(){
//     this.cookieService.delete('sesion-token')
//   }

// }
