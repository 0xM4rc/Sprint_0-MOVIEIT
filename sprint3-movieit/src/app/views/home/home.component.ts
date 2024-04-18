import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import {HighlightedFilmCardComponent} from "../../components/highlighted-film-card/highlighted-film-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {Film} from "../../models/film.model";
import {FilmService} from "../../services/film.service";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
  imports: [HeaderComponent, FooterComponent, HighlightedFilmCardComponent, NgForOf, NgIf, RouterLink]
})
export class HomeComponent implements OnInit{
  items= [{ id: "1", fileUrl: '../../../assets/images/films_covers/avatar.jpg', time: 30},
    { id: "2", fileUrl: '../../../assets/images/films_profile_covers/AliciaInWonderwall.webp', time: 90},
    { id: "3", fileUrl: '../../../assets/images/films_covers/breaking_bad.jpg', time: 10},
    { id: "4", fileUrl: '../../../assets/images/films_covers/matrix.jpg', time: 80},
    { id: "5", fileUrl: '../../../assets/images/films_covers/the_dark_knight.jpg', time: 30},
    { id: "6", fileUrl: '../../../assets/images/films_covers/the_godfather.jpg', time: 30},
    { id: "7", fileUrl: '../../../assets/images/films_profile_covers/Ghostbusters.jpg', time: 30},
    { id: "8", fileUrl: '../../../assets/images/films_profile_covers/johnWick.jpg', time: 30}]
  ;
  films: Film[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
    this.filmService.getFilms().subscribe(films => this.films = films);
  }
}
