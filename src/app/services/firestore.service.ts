import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { QueryFn } from 'angularfire2/firestore/interfaces';
import { DocumentReference, DocumentChangeAction } from 'firebase/firestore';

@Injectable()
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  doc$<T>(path: string): Observable<T> {
    return this.afs.doc<T>(path).valueChanges();
  }

  col$<T>(path: string, queryFn?: QueryFn): Observable<T[]> {
    return this.afs.collection<T>(path, queryFn).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data};
      });
    });
  }

  add<T>(path: string, data: T): Promise<firebase.firestore.DocumentReference> {
    return this.afs.collection<T>(path).add(data);
  }

  set<T>(path: string, data: T): Promise<void> {
    return this.afs.doc<T>(path).set(data);
  }

  update<T>(path: string, data: Partial<T>): Promise<void> {
    return this.afs.doc<T>(path).update(data);
  }

  remove(path: string): Promise<void> {
    return this.afs.doc(path).delete();
  }

}
