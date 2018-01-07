import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CzasService } from '../shared/czas.service';
// import { DataSource } from '@angular/cdk/collections';
import { CzasDataSource } from '../shared/datasource';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource = new CzasDataSource(this.czasService);
  displayedColumns = ['wll', 'l1', 'szt', 'min'];

  constructor(
    private czasService: CzasService,
    private afs: AngularFirestore
  ) {}
  ngOnInit() {}

  klik(row) {
    console.log('klik');
    console.log(row);
  }
}
