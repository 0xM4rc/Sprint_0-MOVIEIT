import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";
import {FileUploadService} from "../../services/file-upload.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})

export class ProfileHeaderComponent {
  imageURL: Observable<string | null>;
  constructor(private router: Router, public authService: AuthenticationService,
              private imageService: FileUploadService) {
    this.imageURL = this.imageService.getFirstImage()
  }
  esPerfil(): boolean {
    return this.router.url === '/profile';
  }
}
