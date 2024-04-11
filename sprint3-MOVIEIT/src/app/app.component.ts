import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Views/home/home.component";
import {ProfileComponent} from "./Views/profile/profile.component";
import {EditProfileComponent} from "./Views/edit-profile/edit-profile.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, ProfileComponent,EditProfileComponent]
})
export class AppComponent {
  title = 'sprint3-MOVIEIT';
}
