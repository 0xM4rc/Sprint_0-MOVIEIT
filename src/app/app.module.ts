import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HighlightedFilmCardComponent } from './components/highlighted-film-card/highlighted-film-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


// Importar AngularFire módulos
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const firebaseConfig = {
  apiKey: "AIzaSyCW6AtugYaPgWI4GXjo5j9fJS-UOzdaGPQ",
  authDomain: "movieit-6c6aa.firebaseapp.com",
  databaseURL: "https://movieit-6c6aa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movieit-6c6aa",
  storageBucket: "movieit-6c6aa.appspot.com",
  messagingSenderId: "141094514069",
  appId: "1:141094514069:web:8fb6b28b99d868db281a9c",
  measurementId: "G-ES6BQYGQMR"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, provideFirebaseApp(() => initializeApp({
      "projectId": "movieit-6c6aa",
      "appId": "1:141094514069:web:8fb6b28b99d868db281a9c",
      "databaseURL": "https://movieit-6c6aa-default-rtdb.europe-west1.firebasedatabase.app",
      "storageBucket": "movieit-6c6aa.appspot.com",
      "apiKey": "AIzaSyCW6AtugYaPgWI4GXjo5j9fJS-UOzdaGPQ",
      "authDomain": "movieit-6c6aa.firebaseapp.com",
      "messagingSenderId": "141094514069",
      "measurementId": "G-ES6BQYGQMR"
    })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()), FormsModule, ReactiveFormsModule, // auth
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
