import {Component, Input, OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FileUpload, FileUploadService } from '../../services/file-upload.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
fileUploads?: FileUpload[];
@Input() isOpen = false;

constructor(protected authService: AuthenticationService,
  private uploadService: FileUploadService
) {}

logout() {
  this.authService.SignOut();
}
}
