import { Component } from '@angular/core';
import { FileUpload, FileUploadService } from '../services/file-upload.service';


@Component({
  selector: 'app-file-uploader',
  template: `
    <input type="file" (change)="selectFile($event)">
    <button (click)="upload()">Upload</button>
  `
})
export class FileUploaderComponent {
  selectedFile: File | null = null;

  constructor(private uploadService: FileUploadService) {}

  selectFile(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  upload(): void {
    if (this.selectedFile) {
      const fileUpload = new FileUpload(this.selectedFile);
      this.uploadService.pushFileToStorage(fileUpload).subscribe(
        percentage => {
          console.log('Upload is ', percentage, '% done');
        },
        error => {
          console.error('Error during file upload:', error);
        }
      );
    }
  }
}

