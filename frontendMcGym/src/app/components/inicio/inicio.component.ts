import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { MapService } from '../../../app/@core/services/map.service';
import { AbstractControl, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';






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

  constructor(private map: MapService, private LoginService:LoginService, public router : Router) {    
    
  }



  ngOnInit() {
    this.map.buildMap();
  }

  login(_form: NgForm){
    this.LoginService.login(_form.value).subscribe(
      res => {console.log(res)
        this.router.navigate(["/main"])
        
      },
      err => console.log(err)
    )
  }

}
