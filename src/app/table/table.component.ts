import { Component, OnInit } from '@angular/core';
import { CzasService } from '../shared/czas.service';
import { CzasDataSource } from '../shared/datasource';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource = new CzasDataSource(this.czasService);
  displayedColumns = ['wll', 'l1', 'szt', 'min'];
  selectedCzas;

  constructor(private czasService: CzasService) {}
  ngOnInit() {
    this.getCzasyHours();
  }

  klik(czas) {
    this.selectedCzas = czas;
  }
  getCzasyHours() {
    return this.czasService.getCzasy().map(arr => {
      arr.reverse();
    });
  }
}
