import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import {HighlightedFilmCardComponent} from "../../components/highlighted-film-card/highlighted-film-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {Film} from "../../models/film.model";
import {FilmService} from "../../services/film.service";
import {RouterLink} from "@angular/router";
import {MovieDescriptionComponent} from "../movie-description/movie-description.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
  imports: [HeaderComponent, FooterComponent, HighlightedFilmCardComponent, NgForOf, NgIf, RouterLink]
})
export class HomeComponent implements OnInit{
  films: Film[] = [];
  selectedFilm: Film | null = null;

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
    this.filmService.getFilms().subscribe(films => this.films = films);
  }

  selectFilm(film: Film) {
    this.filmService.setFilm(film);
  }
}
