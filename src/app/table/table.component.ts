import { Component, OnInit } from '@angular/core';
import { CzasService } from '../shared/czas.service';
import { CzasDataSource } from '../shared/datasource';
import { Czas } from '../shared/model';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource = new CzasDataSource(this.czasService);
  displayedColumns = ['wll', 'l1', 'szt', 'min'];
  selectedCzas: Czas;
  sumMinut = 0;
  czasy: Czas[];

  constructor(public czasService: CzasService) {}
  ngOnInit() {
    this.czasService.getCzasy().subscribe(czasy => {
      this.sumMinut = 0;
      console.log(czasy);
      this.czasy = czasy;
      czasy.forEach(itm => {
        this.sumMinut = this.sumMinut + itm.min * itm.szt; /*  */
      });
    });
  }

  klik(czas: Czas) {
    console.log('klik ', czas);
    this.selectedCzas = czas;
  }
}
