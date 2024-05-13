import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getCoverUrlById(coverId: string): Observable<string> {
    // Método para obtener la URL de una portada por su ID
    return this.firestore.doc(`portadas/${coverId}`).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as any;
        return data ? data.url : null;
      }),
      catchError(err => {
        console.error(err);
        return of('');
      })
    );
  }
  getAvatarById(coverId: string): Observable<string> {
    // Método para obtener la URL de una portada por su ID
    return this.firestore.doc(`avatar/${coverId}`).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as any;
        return data ? data.url : null;
      }),
      catchError(err => {
        console.error(err);
        return of('');
      })
    );
  }
}
