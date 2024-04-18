import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {

}
