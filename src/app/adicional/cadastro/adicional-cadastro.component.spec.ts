import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalCadastroComponent } from './adicional-cadastro.component';

describe('CadastroComponent', () => {
  let component: AdicionalCadastroComponent;
  let fixture: ComponentFixture<AdicionalCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionalCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionalCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
