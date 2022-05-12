import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbCarouselConfig]
})
export class MainComponent implements OnInit {
  constructor(private cookieService: CookieService, public router : Router) { 
      


  }


  ngOnInit(): void {
    if(this.cookieService.get('sesion-token')){
      this.router.navigate(["/main"])
    }else{
      this.router.navigate([""])

    }
  }

  salir(){
    this.cookieService.delete('sesion-token')
  }



}
