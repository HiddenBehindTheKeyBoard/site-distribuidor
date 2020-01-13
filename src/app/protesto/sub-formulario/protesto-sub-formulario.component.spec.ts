import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtestoSubFormularioComponent } from './protesto-sub-formulario.component';

describe('SubFormularioComponent', () => {
  let component: ProtestoSubFormularioComponent;
  let fixture: ComponentFixture<ProtestoSubFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtestoSubFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtestoSubFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
