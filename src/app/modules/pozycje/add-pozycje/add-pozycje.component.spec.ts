import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPozycjeComponent } from './add-pozycje.component';

describe('AddPozycjeComponent', () => {
  let component: AddPozycjeComponent;
  let fixture: ComponentFixture<AddPozycjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPozycjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPozycjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
