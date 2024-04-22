import { Component, OnInit } from '@angular/core';
import {catchError, Observable, of} from 'rxjs';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-film-loader',
  templateUrl: './film-loader.component.html',
  styleUrls: ['./film-loader.component.css'] // Usa styleUrls en lugar de styleUrl
})
export class FilmLoaderComponent implements OnInit {
  items!: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    // Asegúrate de que la colección se llame 'items' en tu Firestore
    this.items = this.firestore.collection('peliculas').valueChanges();
  }
}
