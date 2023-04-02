import { Component, OnInit } from '@angular/core';
import { Wachitainter } from 'src/app/Interfaces/wachitainter';

import { Observable } from 'rxjs';
import { WservicesService } from 'src/app/Servicios/wservices.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  places: Wachitainter[];
  sortDirection: string = 'asc';

  constructor(
    private placesService: WservicesService
  ) {
    this.places = [{
      nombre: 'Prueba de sitio',
      raza: 'Prueba de sitio',
      dueno: 'Prueba de sitio',
      edada: 'Prueba de sitio',
      edadm: 'Prueba de sitio',
      observacion: 'Prueba de sitio',
      color: 'Prueba de sitio',
      imagen: 'https://media.timeout.com/images/105718969/750/422/image.jpg',
      fechar: true
    }];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  sortByDueno() {
    if (this.sortDirection === 'asc') {
      this.places.sort((a, b) => a.dueno.localeCompare(b.dueno));
      this.sortDirection = 'desc';
    } else {
      this.places.sort((a, b) => b.dueno.localeCompare(a.dueno));
      this.sortDirection = 'asc';
    }
  }
  
  sortByNombre() {
    this.places.sort((a, b) => {
      if (a.nombre < b.nombre) { return -1; }
      if (a.nombre > b.nombre) { return 1; }
      return 0;
    });
  }
}