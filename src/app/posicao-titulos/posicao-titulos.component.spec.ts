import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoTitulosComponent } from './posicao-titulos.component';

describe('PosicaoTitulosComponent', () => {
  let component: PosicaoTitulosComponent;
  let fixture: ComponentFixture<PosicaoTitulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicaoTitulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
