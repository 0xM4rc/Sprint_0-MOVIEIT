import {NgModule, OnInit} from '@angular/core';
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
import {SearchMenuComponent} from "../components/search-menu/search-menu.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [HomePage, HighlightedFilmCardComponent, HeaderComponent, FooterComponent, SidebarComponent, SearchMenuComponent]
})
export class HomePageModule {

}
