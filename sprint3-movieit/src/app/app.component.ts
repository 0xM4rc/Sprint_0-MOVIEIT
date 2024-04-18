import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import {ProfileComponent} from "./views/profile/profile.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
  imports: [RouterOutlet, HomeComponent, ProfileComponent]
})
export class AppComponent {
  title = 'sprint3-MOVIEIT';
}
