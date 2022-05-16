import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { EmplogService } from 'src/app/services/emplog.service';
import { ɵparseCookieValue } from '@angular/common';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbCarouselConfig]
})
export class MainComponent implements OnInit {
  mon: boolean | undefined;
  tec: boolean | undefined;

  constructor(private cookieService: CookieService, public router : Router,private EmplogService:EmplogService) { 


  }


  ngOnInit(): void {
    if(this.cookieService.get('sesion-token')){
      this.router.navigate(["/main"])

    var cookieValue = this.cookieService.get("email-token")
      this.EmplogService.isMonitor(cookieValue).subscribe(
        res => {
          if(res){
            this.mon=true
          } else {
            this.mon=false
          }
        },
        err => {
          console.log(err)
      }
       )
    
      this.EmplogService.isTecnico(cookieValue).subscribe(
      res => {
        if(res){
          this.tec=true
        } else {
          this.tec=false
        }
      },
      err => {
        console.log(err)
    }
      )



    }else{
      this.router.navigate([""])
    }
  }

  salir(){
    this.cookieService.delete('sesion-token')
  }

  esadmin(){
    // var cookieValue = this.cookieService.get("sesion-token")

    //   if(this.EmplogService.isMonitor(cookieValue)){
    //       console.log("Sí!!!!")
    //       console.log(cookieValue+" cookie");
    //       this.router.navigate(["/actividades"])
    //     } else {
    //       console.log("Nooooooo :-(")
    //       this.router.navigate(["/main"])
    //     }
    }


}
