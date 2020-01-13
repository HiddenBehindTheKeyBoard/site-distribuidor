import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevedorCadastroComponent } from './devedor-cadastro.component';

describe('CadastroComponent', () => {
  let component: DevedorCadastroComponent;
  let fixture: ComponentFixture<DevedorCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevedorCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevedorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
