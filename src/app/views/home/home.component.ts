import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
