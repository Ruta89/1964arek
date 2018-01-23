import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPozycjaComponent } from './detail-pozycja.component';

describe('DetailPozycjaComponent', () => {
  let component: DetailPozycjaComponent;
  let fixture: ComponentFixture<DetailPozycjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPozycjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPozycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
