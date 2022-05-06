import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './misActividades.component.html',
  styleUrls: ['./misActividades.component.css']
})
export class misActividadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("funciona")
  }

}
