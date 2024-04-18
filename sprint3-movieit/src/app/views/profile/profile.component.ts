import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {ProfileHeaderComponent} from "../../components/profile-header/profile-header.component";


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    ProfileHeaderComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}


