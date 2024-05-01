import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilmLoaderComponent } from './film-loader/film-loader.component';
import { HeaderComponent } from './templates/header/header.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HighlightedFilmCardComponent } from './templates/highlighted-film-card/highlighted-film-card.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { MovieDescriptionComponent } from './views/movie-description/movie-description.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ProfileHeaderComponent } from './templates/profile-header/profile-header.component';
import { SimpleFilmCardComponent } from './templates/simple-film-card/simple-film-card.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { SearchMenuComponent } from './templates/search-menu/search-menu.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FilmLoaderComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    HighlightedFilmCardComponent,
    LoginComponent,
    RegisterComponent,
    MovieDescriptionComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    SimpleFilmCardComponent,
    EditProfileComponent,
    NotfoundComponent,
    SearchMenuComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    RouterModule,
    RouterLink,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    // Inicializa Firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
