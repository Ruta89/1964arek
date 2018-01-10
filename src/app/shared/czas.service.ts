import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Czas, CzasId } from './model';
@Injectable()
export class CzasService {
  private czasCollection: AngularFirestoreCollection<Czas>;
  czasy: Observable<CzasId[]>;
  czasDoc: AngularFirestoreDocument<Czas>;
  newCzas: Observable<Czas>;

  // constructor(private readonly afs: AngularFirestore) {
  constructor(private afs: AngularFirestore) {
    this.czasCollection = afs.collection<Czas>('czasowka', ref =>
      ref.orderBy('date', 'asc')
    );
    this.czasy = this.czasCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Czas;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getCzasy() {
    return this.czasy; // datasource connect()
  }
  addCzas(czas: Czas) {
    this.czasCollection.add(czas);
  }
  deleteCzas(id: CzasId) {
    this.czasDoc = this.afs.doc<Czas>(`czasowka/${id}`);
    this.czasDoc.delete();
  }

  updateCzas(czas: Czas) {
    this.czasDoc = this.afs.doc<Czas>(`czasowka/${czas.id}`);
    this.czasDoc.update(czas);
  }
}
