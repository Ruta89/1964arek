import { CzasService } from '../shared/czas.service';
import { DataSource } from '@angular/cdk/collections';

export class CzasDataSource extends DataSource<any> {
  constructor(private czasService: CzasService) {
    super();
  }
  connect() {
    return this.czasService.getCzasy();
  }

  disconnect() {}
}
