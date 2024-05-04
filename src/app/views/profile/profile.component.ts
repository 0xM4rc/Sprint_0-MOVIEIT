import { Component,OnInit } from '@angular/core';
import Cover from "../../interfaces/cover";
import {FirebaseService} from "../../services/firebase.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  favorites: Cover[] = [];
  pending: Cover[] = [];
  watched: Cover[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.loadUrls()
  }

  loadUrls() {
    const ids = Array.from({length: 17}, (_, i) => i + 6);
    let num :number = 1;
    ids.forEach(id => {
      this.firebaseService.getCoverUrlById(id.toString()).subscribe(url => {
        if(num == 1){
          num++;
          this.favorites.push({
            id: id,
            fileUrl: url,
            time: 30
          });
        }else if(num == 2){
          num++;
          this.pending.push({
            id: id,
            fileUrl: url,
            time: 30
          });
        }else{
          num = 1;
          this.watched.push({
            id: id,
            fileUrl: url,
            time: 30
          });
        }

      });
    });
  }
}
