import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {ProfileHeaderComponent} from "../../components/profile-header/profile-header.component";
import {HighlightedFilmCardComponent} from "../../components/highlighted-film-card/highlighted-film-card.component";
import {SimpleFilmCardComponent} from "../../components/simple-film-card/simple-film-card.component";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    ProfileHeaderComponent,
    HighlightedFilmCardComponent,
    SimpleFilmCardComponent,
    NgForOf,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  items= [{ id: 1, fileUrl: '../../../assets/images/films_profile_covers/TronLegacy.jpg', time: 30},
    { id: 2, fileUrl: '../../../assets/images/films_profile_covers/AliciaInWonderwall.webp', time: 30},
    { id: 3, fileUrl: '../../../assets/images/films_profile_covers/AboutTime.jpg', time: 10},
    { id: 4, fileUrl: '../../../assets/images/films_profile_covers/TheIntern.jpg', time: 80},
    { id: 5, fileUrl: '../../../assets/images/films_profile_covers/OperacionUncle.jpg', time: 30},
    { id: 6, fileUrl: '../../../assets/images/films_profile_covers/Avatar2.jpeg', time: 30},
    { id: 7, fileUrl: '../../../assets/images/films_profile_covers/Ghostbusters.jpg', time: 30},
    { id: 8, fileUrl: '../../../assets/images/films_profile_covers/johnWick.jpg', time: 30}]
  ;

  items2= [{ id: 1, fileUrl: '../../../assets/images/films_covers/avatar.jpg', time: 30},
    { id: 9, fileUrl: '../../../assets/images/films_profile_covers/AliciaInWonderwall.webp', time: 90},
    { id: 10, fileUrl: '../../../assets/images/films_profile_covers/AboutTime.jpg', time: 10},
    { id: 11, fileUrl: '../../../assets/images/films_covers/matrix.jpg', time: 80},
    { id: 12, fileUrl: '../../../assets/images/films_covers/the_dark_knight.jpg', time: 30},
    { id: 13, fileUrl: '../../../assets/images/films_covers/the_godfather.jpg', time: 30},
    { id: 14, fileUrl: '../../../assets/images/films_profile_covers/Ghostbusters.jpg', time: 30},
    { id: 15, fileUrl: '../../../assets/images/films_profile_covers/johnWick.jpg', time: 30}]
  ;

}


