import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HighlightedFilmCardComponent } from '../components/highlighted-film-card/highlighted-film-card.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FirebaseService } from '../services/firebase.service';
import Cover from '../interfaces/cover';
import {SidebarComponent} from "../components/sidebar/sidebar.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, HighlightedFilmCardComponent, HeaderComponent, FooterComponent, SidebarComponent]
})
export class HomePageModule {
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
