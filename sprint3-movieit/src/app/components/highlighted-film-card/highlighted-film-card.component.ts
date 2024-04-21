import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FilmService} from "../../services/film.service";
import {Film} from "../../models/film.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-highlighted-film-card',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './highlighted-film-card.component.html',
  styleUrl: './highlighted-film-card.component.css'
})
export class HighlightedFilmCardComponent implements OnInit{
  @Input() id: string = '';
  @Input() fileUrl: string = '';
  @Input() time: number = 30;

  films: Film[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
    this.filmService.getFilms().subscribe(films => this.films = films);
  }

  selectFilm(film: Film) {
    this.filmService.setFilm(film);
  }
}
