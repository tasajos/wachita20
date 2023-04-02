import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { WservicesService } from 'src/app/Servicios/wservices.service';

@Component({
  selector: 'app-agregarwachita',
  templateUrl: './agregarwachita.component.html',
  styleUrls: ['./agregarwachita.component.css']
})
export class AgregarwachitaComponent implements OnInit {

  formulario: FormGroup;
  mensaje: string = '';
  formularioEnviado = false;
  mostrarAlerta: boolean = false; // Definición e inicialización de la propiedad


  constructor(
    private wservice:WservicesService
  ) 
  {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      raza: new FormControl(),
      dueno: new FormControl(),
      edada: new FormControl(),
      edadm: new FormControl(),
      observacion: new FormControl(),
      color: new FormControl(),
     
    })
  }

  ngOnInit(): void {
    
  }


 // form: FormGroup


 eliminarAlerta() {
  setTimeout(() => {
    this.mostrarAlerta = false;
  }, 3000); // 3000 ms = 3 segundos
}


async onSubmit() {
  console.log(this.formulario.value)
  const response = await this.wservice.agregarwachita(this.formulario.value);
  console.log(response);
  this.formularioEnviado = true;
  setTimeout(() => {
    this.formularioEnviado = false;
  }, 3000);
  this.formulario.reset();

}

}
