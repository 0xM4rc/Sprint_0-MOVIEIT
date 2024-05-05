import {Component, Input, OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FileUpload, FileUploadService } from '../../services/file-upload.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
@Input() isOpen = false;

imageURL: Observable<string | null>;

  constructor(private imageService: FileUploadService,
    public authService: AuthenticationService
  ) {
    this.imageURL = this.imageService.getFirstImage();
  }
logout() {
  this.authService.SignOut();
}
}
