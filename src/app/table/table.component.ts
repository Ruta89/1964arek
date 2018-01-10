import { Component, OnInit } from '@angular/core';
import { CzasService } from '../shared/czas.service';
import { CzasDataSource } from '../shared/datasource';
import { Czas } from '../shared/model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource = new CzasDataSource(this.czasService);
  displayedColumns = ['wll', 'l1', 'szt', 'min'];
  selectedCzas: Czas;

  constructor(private czasService: CzasService) {}
  ngOnInit() {}

  klik(czas: Czas) {
    console.log('klik ', czas);
    this.selectedCzas = czas;
  }
}
