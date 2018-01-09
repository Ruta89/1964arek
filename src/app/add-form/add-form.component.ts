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
    date: null
  };
  visable = false;

  constructor(private czasService: CzasService) {}

  ngOnInit() {}
  addCzas() {
    this.czasowka.date = Date.now();
    this.czasService.addCzas(this.czasowka);

    // reset form
    this.czasowka = {
      wll: null,
      l1: null,
      szt: null,
      min: null,
      date: null
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
