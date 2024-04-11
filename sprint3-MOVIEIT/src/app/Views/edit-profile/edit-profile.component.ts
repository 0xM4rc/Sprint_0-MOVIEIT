import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {ProfileHeaderComponent} from "../../components/profile-header/profile-header.component";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        ProfileHeaderComponent,
    ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

}
