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

  constructor(
    private wservice:WservicesService
  ) 
  {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
     
    })
  }

  ngOnInit(): void {
    
  }


 // form: FormGroup

async onSubmit() {
  console.log(this.formulario.value)
  const response = await this.wservice.agregarwachita(this.formulario.value);
  console.log(response);
}

}
