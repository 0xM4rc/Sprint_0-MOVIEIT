import { Component} from '@angular/core';
import {HighlightedFilmCardComponent} from "../../components/highlighted-film-card/highlighted-film-card.component";
import {NgForOf} from "@angular/common";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

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
export class MovieDescriptionComponent {
  constructor() {
  }
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  items= [{ id: 1, fileUrl: '../../../assets/images/films_covers/avatar.jpg', time: 30},
    { id: 2, fileUrl: '../../../assets/images/films_profile_covers/AliciaInWonderwall.webp', time: 90},
    { id: 3, fileUrl: '../../../assets/images/films_covers/breaking_bad.jpg', time: 10},
    { id: 4, fileUrl: '../../../assets/images/films_covers/matrix.jpg', time: 80},
    { id: 5, fileUrl: '../../../assets/images/films_covers/the_dark_knight.jpg', time: 30},
    { id: 6, fileUrl: '../../../assets/images/films_covers/the_godfather.jpg', time: 30},
    { id: 7, fileUrl: '../../../assets/images/films_profile_covers/Ghostbusters.jpg', time: 30},
    { id: 8, fileUrl: '../../../assets/images/films_profile_covers/johnWick.jpg', time: 30}]
  ;
}
