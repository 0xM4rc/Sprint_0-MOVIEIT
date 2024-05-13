import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import Cover from '../interfaces/cover';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Cover[] = [];
  showSidebar:boolean = false;

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

