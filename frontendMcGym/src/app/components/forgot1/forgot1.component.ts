import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { CookieService } from 'ngx-cookie-service';
import { EmplogService } from 'src/app/services/emplog.service';

@Component({
  selector: 'app-forgot1',
  templateUrl: './forgot1.component.html',
  styleUrls: ['./forgot1.component.css']
})
export class Forgot1Component implements OnInit {


  title = 'enviarCorreos';

  datos!: FormGroup;
  acceso: boolean | undefined;

  constructor(private httpclient:HttpClient, public EmailService:EmailService,
    public CookieService: CookieService, public EmplogService: EmplogService ){
   
    this.datos= new FormGroup({
      correo: new FormControl([Validators.required, Validators.email]),

    })
  }

  ngOnInit(): void {
  }

  resetForm(_form: NgForm){
    location.reload();
  }

  
  reset1(_form: NgForm){
    //this.CookieService.set('email', _form.value.email)
    const cookieValue = this.CookieService.set("email", _form.value.email)
    const cookieValue2 = this.CookieService.get("email")
    this.EmplogService.isEmpleado(cookieValue2).subscribe(
      res => {
        console.log("---------")
        console.log(res)
        console.log("---------")  
        if(res){
          this.acceso = true
          this.EmailService.envioCorreo({email: _form.value.email}).subscribe(res =>{ 
            var u = JSON.stringify(res);
            var e = JSON.parse(u)
            console.log(e , " E parse mail")
          })
        } else {
          console.log("nooo")
          this.acceso = false
        }
      },
      err => {
        console.log(err)
    }
    )
    this.EmplogService.isCliente(cookieValue2).subscribe(
      res => {
        console.log("---------")
        console.log(res)
        console.log("---------")  
        if(res){
          this.acceso = true
          this.EmailService.envioCorreo({email: _form.value.email}).subscribe(res =>{ 
            var u = JSON.stringify(res);
            var e = JSON.parse(u)
            console.log(e , " E parse mail")
          })
        } else {
          console.log("nooo")
          this.acceso = false
        }
      },
      err => {
        console.log(err)
    }
    )    
  } 
}

