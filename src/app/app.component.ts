import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CzasService } from './czas.service';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  czasowka = {
    wll: '',
    l1: '',
    szt: '',
    min: '',
    date: Date.now()
  };

  dataSource = new CzasDataSource(this.czasService);
  displayedColumns = ['wll', 'l1', 'szt', 'min', 'date'];

  constructor(
    private czasService: CzasService,
    private afs: AngularFirestore
  ) {}

  addCzas() {
    this.czasService.addCzas(this.czasowka);
  }
}

export class CzasDataSource extends DataSource<any> {
  constructor(private czasService: CzasService) {
    super();
  }
  connect() {
    return this.czasService.getCzasy();
  }

  disconnect() {}
}
