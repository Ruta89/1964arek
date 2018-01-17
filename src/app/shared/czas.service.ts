import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Czas } from './model';
@Injectable()
export class CzasService {
  czasyCollection: AngularFirestoreCollection<Czas>;
  czasy: Observable<Czas[]>;
  czasDoc: AngularFirestoreDocument<Czas>;
  hours: number;
  result: number;
  constructor(private afs: AngularFirestore) {
    const hours = 1;
    const result: number = Date.now() - hours * 3600000;
    this.czasyCollection = this.afs.collection('czasy', ref =>
      ref.orderBy('created', 'asc').startAt(result)
    );

    this.czasy = this.czasyCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Czas;
        data.id = a.payload.doc.id;
        return data;
      }).reverse();
    });
  }

  getCzasy() {
    return this.czasy;
  }
  add(data: Czas) {
    this.czasyCollection.add({ ...data, created: new Date() });
  }
  delete(id: string) {
    this.czasDoc = this.afs.doc(`czasy/${id}`);
    this.czasDoc.delete();
  }

  update(data: Czas) {
    this.czasDoc = this.afs.doc(`czasy/${data.id}`);
    this.czasDoc.update(data);
  }
}
