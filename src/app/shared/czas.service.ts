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
    // z ostatnich 8godzin
    const hoursResult: number = Date.now() - 8 * 3600000;
    console.log('getCzasy');
    const wynik = this.afs
      .collection('czasowka', ref => ref.orderBy('date').startAt(hoursResult))
      .valueChanges();
    return wynik;
  }
}
