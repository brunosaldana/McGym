import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { MapService } from '../../../app/@core/services/map.service';
import { AbstractControl, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';






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

  constructor(private map: MapService, private LoginService:LoginService) {    
    
  }


  ngOnInit() {
    this.map.buildMap();
  }

  validation(_form: NgForm){
    console.log("valida")

  }
  login(_form: NgForm){
    console.log("valida")

  }

}
