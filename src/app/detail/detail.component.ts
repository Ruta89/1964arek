import { Component, OnInit, Input } from '@angular/core';
import { Czas, CzasId } from '../shared/model';
import { CzasService } from '../shared/czas.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() czas: Czas;
  editState = false;
  constructor(private czasService: CzasService) {}

  ngOnInit() {}

  delete(id: CzasId) {
    console.log('delete', id);
    this.czasService.deleteCzas(id);
    this.changeState();
  }

  update(czas: Czas) {
    console.log('delete', czas);
    this.editState = true;
  }
  updateCzas(czas: Czas) {
    console.log('updateCzas', czas);
    this.czasService.updateCzas(czas);
    this.changeState();
  }
  changeState() {
    this.czas = null;
    this.editState = false;
  }
}
