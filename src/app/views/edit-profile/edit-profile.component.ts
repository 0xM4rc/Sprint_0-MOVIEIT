import {Component, OnInit} from '@angular/core';
import {Avatar} from "../../interfaces/avatar";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  avatars: Avatar[] = [];

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.loadUrls()
  }

  loadUrls(){
    const ids = Array.from({length: 22}, (_, i) => i + 1);
    ids.forEach(id => {
      this.firebaseService.getAvatarById(id.toString()).subscribe(url => {
        this.avatars.push({
          id: id,
          url: url,
        });
      });
    });
  }
}
