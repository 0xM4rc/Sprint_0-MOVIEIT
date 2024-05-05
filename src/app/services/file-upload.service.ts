import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';

export class FileUpload {
  key: string | null = '';
  name: string = '';
  url: string = '';
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/uploads';

  constructor(
    private db: AngularFireDatabase, 
    private storage: AngularFireStorage
  ) {}

  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges().pipe(
      map(percentage => percentage ?? 0)
    );
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }


getFiles(numberItems: number): AngularFireList<FileUpload> {
  return this.db.list(this.basePath, ref =>
    ref.limitToLast(numberItems));
}

getFirstImage(): Observable<string | null> {
  const ref = this.storage.ref('uploads');
  return from(ref.listAll()).pipe(
    switchMap(result => {
      if (result.items.length > 0) {
        // Explicitamente declarar el tipo de retorno como Observable<string>
        return from(result.items[0].getDownloadURL() as Promise<string>);
      } else {
        // Retorna un Observable que emite null si no hay imágenes
        return of(null);
      }
    }),
    catchError(err => {
      // Manejo de errores en caso de fallar la obtención de la URL
      console.error('Error fetching image URL:', err);
      return of(null);  // Proporciona un retorno seguro en caso de error
    })
  );
}
  
}
