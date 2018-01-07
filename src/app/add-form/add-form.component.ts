import { Component, OnInit } from '@angular/core';
import { CzasService } from '../shared/czas.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  czasowka = {
    wll: '',
    l1: '',
    szt: '',
    min: '',
    date: Date.now()
  };

  constructor(private czasService: CzasService) {}

  ngOnInit() {}
  addCzas() {
    this.czasService.addCzas(this.czasowka);
  }
}
