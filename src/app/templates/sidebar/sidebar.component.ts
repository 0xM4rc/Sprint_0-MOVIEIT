import {Component, Input} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

@Input() isOpen = false;
constructor(protected authService: AuthenticationService) {}
logout() {
  // ?¿?¿
}
}
