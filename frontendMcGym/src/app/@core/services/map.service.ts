import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map!: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 41.23112;
  lng = 1.72878;
  zoom = 14;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    const marker1 = new mapboxgl.Marker()
    .setLngLat([1.72878 , 41.23112])
    .addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
    }
}