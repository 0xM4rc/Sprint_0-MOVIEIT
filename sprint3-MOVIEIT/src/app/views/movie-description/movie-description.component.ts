import {Component, OnInit} from '@angular/core';
import {HighlightedFilmCardComponent} from "../../components/highlighted-film-card/highlighted-film-card.component";
import {NgForOf} from "@angular/common";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {Film} from "../../models/film.model";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-movie-description',
  standalone: true,
  imports: [
    HighlightedFilmCardComponent,
    NgForOf,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './movie-description.component.html',
  styleUrl: './movie-description.component.css'
})
export class MovieDescriptionComponent implements OnInit{
  films: Film[] = [];
  film: Film | null = null;

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
    this.film = this.filmService.getFilm();
    this.filmService.getFilms().subscribe(films => this.films = films);
    window.scrollTo(0, 0);
  }
}
