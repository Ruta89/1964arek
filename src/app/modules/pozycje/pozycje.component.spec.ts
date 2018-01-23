import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozycjeComponent } from './pozycje.component';

describe('PozycjeComponent', () => {
  let component: PozycjeComponent;
  let fixture: ComponentFixture<PozycjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozycjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozycjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
