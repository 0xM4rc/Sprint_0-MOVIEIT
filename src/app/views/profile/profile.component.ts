import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
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
}
