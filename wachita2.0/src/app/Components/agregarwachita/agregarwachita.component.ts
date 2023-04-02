import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { WservicesService } from 'src/app/Servicios/wservices.service';
import { Storage,ref,uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage'
//import { Date } from 'Date';


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
  images: string [];
  fechaActual: string;

  constructor(
    private wservice:WservicesService,
    private storage: Storage 
  ) 
  {
    this.fechaActual = new Date().toISOString().slice(0, 16);
    this.images=[];
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      raza: new FormControl(),
      dueno: new FormControl(),
      edada: new FormControl(),
      edadm: new FormControl(),
      observacion: new FormControl(),
      color: new FormControl(),
      imagen: new FormControl(),
      fechar: new FormControl(),
     
    })
  }

  ngOnInit() {
    this.getImages();
    const date = new Date();
    this.fechaActual = date.toLocaleString();
  }

  uploadImage ($event:any) {

    const file = $event.target.files[0];
    console.log(file)
  
  const Imgref= ref(this.storage, `images/${file.name}`);
  
  
  uploadBytes (Imgref,file)
  .then(response => {
    console.log(response)
  this.getImages();
  })
  .catch(error =>console.log(error));
  }

  getImages(){
    const Imgref = ref(this.storage, 'images');
    listAll(Imgref)
    .then(async response => {
  
      console.log(response);
      this.images = [];
  
  
  for (let item of response.items){
    const url = await getDownloadURL(item);
    this.images.push(url);
    console.log(url);
  
  }
  
    })
      .catch(error => console.log(error))
    
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
