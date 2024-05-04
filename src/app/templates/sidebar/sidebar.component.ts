import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  closed: boolean = true;

  constructor(public authenticationService: AuthenticationService) {
  }

  toggleSidebar(): void {
    this.closed = !this.closed;
  }

  logout() {
    this.authenticationService.logout();
  }
}
