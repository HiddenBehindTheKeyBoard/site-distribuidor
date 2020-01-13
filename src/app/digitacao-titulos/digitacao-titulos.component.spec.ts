import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitacaoTitulosComponent } from './digitacao-titulos.component';

describe('DigitacaoTitulosComponent', () => {
  let component: DigitacaoTitulosComponent;
  let fixture: ComponentFixture<DigitacaoTitulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitacaoTitulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitacaoTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
