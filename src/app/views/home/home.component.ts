import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import Cover from '../../interfaces/cover';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  items: Cover[] = [];
  showSidebar = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.loadUrls();
  }

  loadUrls() {
    const ids = [1, 2, 3, 4, 1, 2, 3, 4];
    ids.forEach(id => {
      this.firebaseService.getCoverUrlById(id.toString()).subscribe(url => {
        this.items.push({
          id: id,
          fileUrl: url,
          time: 30
        });
      });
    });
  }

  handleSidebar(status: boolean) {
    this.showSidebar = status;
  }
}
