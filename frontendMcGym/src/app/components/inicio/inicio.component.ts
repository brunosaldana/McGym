import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { MapService } from '../../../app/@core/services/map.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.buildMap();
  }
}
