import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  closed: boolean = true;

  constructor(private authService: AuthenticationService) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    
  }

  toggleSidebar(): void {
    this.closed = !this.closed;
  }

  SignOut() {
    this.authService.SignOut();
  }
}
