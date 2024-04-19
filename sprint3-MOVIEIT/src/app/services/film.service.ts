import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Film} from "../models/film.model";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private film: Film | null = null;

  constructor(private firestore: Firestore) { }

  getFilms() {
    const filmsRef = collection(this.firestore, 'peliculas');
    return collectionData(filmsRef, {idField: 'id'}) as Observable<Film[]>;
  }

  setFilm(film: Film) {
    this.film = film;
  }

  getFilm() {
    return this.film;
  }
}
