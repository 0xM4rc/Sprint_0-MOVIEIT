import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import {FormsModule} from "@angular/forms";
import { FilmLoaderComponent } from './film-loader/film-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FilmLoaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    // Inicializa Firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
