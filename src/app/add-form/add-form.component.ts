import { Component, OnInit } from '@angular/core';
import { CzasService } from '../shared/czas.service';
import { Czas } from '../shared/model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  czasowka: Czas = {
    wll: null,
    l1: null,
    szt: null,
    min: null,
    note: null,
    created: null,
    id: null
  };
  visable = false;

  constructor(private czasService: CzasService) {}

  ngOnInit() {}
  addCzas() {
    this.czasowka.created = new Date();
    this.czasService.add(this.czasowka);

    // reset form
    this.czasowka = {
      wll: null,
      l1: null,
      szt: null,
      min: null,
      note: null,
      created: null,
      id: null
    };

    this.visable = false;
  }

  visableToggle() {
    if (this.visable === true) {
      this.visable = false;
    } else {
      this.visable = true;
    }
  }
}
