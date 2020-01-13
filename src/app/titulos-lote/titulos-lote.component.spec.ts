import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosLoteComponent } from './titulos-lote.component';

describe('TitulosLoteComponent', () => {
  let component: TitulosLoteComponent;
  let fixture: ComponentFixture<TitulosLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulosLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulosLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
