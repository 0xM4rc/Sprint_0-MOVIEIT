import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})

export class ProfileHeaderComponent {
  constructor(private router: Router) {}
  esPerfil(): boolean {
    return this.router.url === '/profile';
  }
}
