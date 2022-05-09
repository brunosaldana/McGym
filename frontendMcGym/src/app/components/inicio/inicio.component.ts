import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { MapService } from '../../../app/@core/services/map.service';
import { AbstractControl, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/clientes.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user={
    email: '',
    password: ''
  }

  public cookieValue: string | undefined;
  Cliente: any;
  cook: any;

  constructor(private cookieService: CookieService,public ClienteService:ClienteService, private map: MapService,private LoginService:LoginService, public router : Router) { 
      

      


  }

  cookie(id: string){
    this.cookieService.set('sesion-token', id);
    this.cookieValue = this.cookieService.get('sesion-token')
  }

  ngOnInit() {
    this.map.buildMap();
  }

  login(_form: NgForm){
    this.LoginService.login(_form.value).subscribe(
      res => {
        console.log(res)
        var u = JSON.stringify(res);
        var e = JSON.parse(u);
        console.log(e)
        const cook = this.cookie(e._id);
        if (this.cookieService.get('sesion-token')&& this.LoginService.idExists(e.id)){
          this.router.navigate(["/main"])
          console.log(this.LoginService.idExists(e.id))

        } else { 
          this.router.navigate([""])

        }

        

      },
      err => console.log(err)
    )
  }


}
