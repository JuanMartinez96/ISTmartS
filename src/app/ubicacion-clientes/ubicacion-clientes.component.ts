import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZWxqdWFuIiwiYSI6ImNsb3h3OWRrbjE4dW4yaXBrOTQwbnVpcTgifQ.yTolcwsR9FaHdpA-yAmoHQ';

@Component({
  selector: 'ubicacion-clientes',
  templateUrl: './ubicacion-clientes.component.html',
  styleUrls: ['./ubicacion-clientes.component.css']
})
export class UbicacionClientesComponent  implements AfterViewInit{


  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-101.6932, 21.1619], // starting position [lng, lat]
      zoom: 11, // starting zoom
    }
      )}
}
