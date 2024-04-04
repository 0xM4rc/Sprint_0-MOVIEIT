import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MovieDescriptionComponent} from "./movie-description/movie-description.component";
import {SearchResultPageComponent} from "./search-result-page/search-result-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, MovieDescriptionComponent, SearchResultPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sprint3-MOVIEIT';
}
