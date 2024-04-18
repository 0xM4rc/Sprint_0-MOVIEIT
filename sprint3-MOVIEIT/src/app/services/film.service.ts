import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Film} from "../models/film.model";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private firestore: Firestore) { }

  getFilms() {
    const filmsRef = collection(this.firestore, 'peliculas');
    return collectionData(filmsRef, {idField: 'id'}) as Observable<Film[]>;
  }
}
