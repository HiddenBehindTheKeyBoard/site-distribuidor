import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressaoFormularioProtestoComponent } from './impressao-formulario-protesto.component';

describe('ImpressaoFormularioProtestoComponent', () => {
  let component: ImpressaoFormularioProtestoComponent;
  let fixture: ComponentFixture<ImpressaoFormularioProtestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressaoFormularioProtestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressaoFormularioProtestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
