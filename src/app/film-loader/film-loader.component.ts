import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from '../interfaces/movie';
import {AngularFirestore} from "@angular/fire/compat/firestore"; // Asegúrate de especificar la ruta correcta a tu interfaz Pelicula

@Component({
  selector: 'app-film-loader',
  templateUrl: './film-loader.component.html',
  styleUrls: ['./film-loader.component.css'] // Usa styleUrls en lugar de styleUrl
})
export class FilmLoaderComponent implements OnInit {
  movies$: Observable<Movie[]> = new Observable<Movie[]>();

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // Cargar las películas desde Firebase Firestore
    this.movies$ = this.firestore.collection<Movie>('peliculas').valueChanges();
  }
}
