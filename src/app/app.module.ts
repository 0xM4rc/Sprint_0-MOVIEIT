import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import {FormsModule} from "@angular/forms";
import { FilmLoaderComponent } from './film-loader/film-loader.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightedFilmCardComponent } from './components/highlighted-film-card/highlighted-film-card.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { MovieDescriptionComponent } from './views/movie-description/movie-description.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { SimpleFilmCardComponent } from './components/simple-film-card/simple-film-card.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';

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
    RouterLink,
    RouterOutlet,
    // Inicializa Firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
