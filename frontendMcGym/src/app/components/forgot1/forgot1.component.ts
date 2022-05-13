import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot1',
  templateUrl: './forgot1.component.html',
  styleUrls: ['./forgot1.component.css']
})
export class Forgot1Component implements OnInit {
  title = 'enviarCorreos';

  datos!: FormGroup;

  constructor(private httpclient:HttpClient){
    this.datos= new FormGroup({
      correo: new FormControl('',[Validators.required, Validators.email]),
      asunto: new FormControl('',[Validators.required,]),
      mensaje: new FormControl('',[Validators.required,])
    })
  }
  enviocorreo(){
    let params = {
      email:this.datos.value.correo,
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.mensaje,
    }
    console.log(params);
    this.httpclient.post('http://localhost/4000/envio',params).subscribe(res=>{
      
    });

  }
  ngOnInit(): void {
  }


  reset1(_form: NgForm){
    
  }
}