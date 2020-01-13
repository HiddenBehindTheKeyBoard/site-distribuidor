import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoTitulosDevedorComponent } from './posicao-titulos-devedor.component';

describe('PosicaoTitulosDevedorComponent', () => {
  let component: PosicaoTitulosDevedorComponent;
  let fixture: ComponentFixture<PosicaoTitulosDevedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicaoTitulosDevedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoTitulosDevedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
