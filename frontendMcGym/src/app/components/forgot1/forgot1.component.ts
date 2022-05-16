import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-forgot1',
  templateUrl: './forgot1.component.html',
  styleUrls: ['./forgot1.component.css']
})
export class Forgot1Component implements OnInit {
  title = 'enviarCorreos';

  datos!: FormGroup;

  constructor(private httpclient:HttpClient, public EmailService:EmailService, public CookieService: CookieService){
   
    this.datos= new FormGroup({
      correo: new FormControl([Validators.required, Validators.email]),

    })
  }

  ngOnInit(): void {
  }
  
  reset1(_form: NgForm){
    //this.CookieService.set('email', _form.value.email)
    this.EmailService.envioCorreo({email: _form.value.email}).subscribe(res =>{ 

      var u = JSON.stringify(res);
      var e = JSON.parse(u)
      console.log(e , " E parse mail")
    })

    //funcion  genera -> safdajsdvau121653712
    
  } 
}

