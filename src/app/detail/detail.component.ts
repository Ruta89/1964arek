import { Component, OnInit, Input } from '@angular/core';
import { Czas } from '../shared/model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() czas: Czas;

  constructor() {}

  ngOnInit() {}
}
