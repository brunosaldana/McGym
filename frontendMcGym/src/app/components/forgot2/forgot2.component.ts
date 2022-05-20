import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AbstractControl, NgForm } from '@angular/forms';
import { Pass } from 'src/app/models/pass';
import { NgModel } from '@angular/forms';
import { EmplogService } from 'src/app/services/emplog.service';


@Component({
  selector: 'app-forgot2',
  templateUrl: './forgot2.component.html',
  styleUrls: ['./forgot2.component.css']
})
export class Forgot2Component implements OnInit {



  constructor(public CookieService: CookieService, public Emplog:EmplogService) { }

  ngOnInit(): void {
    console.log("aa")
    console.log(this.CookieService.get("email"))
  }
  
  resforgot2(Form: NgForm){
    var email = this.CookieService.get("email")
    console.log(Form.value.password)
    var contra = (Form.value.password)


    if (this.Emplog.isCliente(email)){
      this.Emplog.resPasscli(email,contra).subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )

    }else if(this.Emplog.isEmpleado(email)){
      this.Emplog.resPassemp(email,contra).subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
    }else{
      alert("Upss! el correo no pertenece a ningun cliente Mcgym")
    }
  }





}
