import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageModule} from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { ListResult } from '@angular/fire/compat/storage/interfaces';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {
  imageUrls: string[] = [];
  imageClicked = false;
  selectedImage: string = '';

  constructor(private storage: AngularFireStorage) { }

  async ngOnInit() {
    const storageRef = this.storage.ref('images');
    const list = await firstValueFrom(storageRef.listAll());
    const urlsPromises = list.items.map((item) => item.getDownloadURL());
    this.imageUrls = await Promise.all(urlsPromises);
  }
  onImageClicked(imageUrl: string) {
    this.imageClicked = true;
    this.selectedImage = imageUrl;
  }
}