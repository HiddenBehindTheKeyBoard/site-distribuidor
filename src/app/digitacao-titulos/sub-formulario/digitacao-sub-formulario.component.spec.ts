import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitacaoSubFormularioComponent } from './digitacao-sub-formulario.component';

describe('SubFormularioComponent', () => {
  let component: DigitacaoSubFormularioComponent;
  let fixture: ComponentFixture<DigitacaoSubFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitacaoSubFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitacaoSubFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
