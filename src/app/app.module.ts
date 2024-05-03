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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import {getAuth, provideAuth} from "@angular/fire/auth";

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
    FileUploaderComponent,
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
    provideFirebaseApp(() => initializeApp({"projectId":"movieit-6c6aa","appId":"1:141094514069:web:8fb6b28b99d868db281a9c","databaseURL":"https://movieit-6c6aa-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"movieit-6c6aa.appspot.com","apiKey":"AIzaSyCW6AtugYaPgWI4GXjo5j9fJS-UOzdaGPQ","authDomain":"movieit-6c6aa.firebaseapp.com","messagingSenderId":"141094514069","measurementId":"G-ES6BQYGQMR"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())
    // Inicializa Firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
