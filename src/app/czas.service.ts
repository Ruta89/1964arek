import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class CzasService {
  constructor(private afs: AngularFirestore) {}

  addCzas(czasData) {
    this.afs
      .collection('czasowka')
      .add(czasData)
      .then(() => {
        console.log('dodano czas');
      });
  }

  getCzasy() {
    console.log('getCzasy');
    return this.afs
      .collection('czasowka', ref => ref.orderBy('date'))
      .valueChanges();
  }
}
