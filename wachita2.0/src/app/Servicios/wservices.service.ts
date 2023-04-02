import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Wachitainter } from '../Interfaces/wachitainter';


@Injectable({
  providedIn: 'root'
})
export class WservicesService {

  constructor(private firestore:Firestore) {}

  agregarwachita(wachitainter:Wachitainter) {

    const placeRef = collection(this.firestore,'wachas');
return addDoc(placeRef,wachitainter);


  }
}
