import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLoteComponent } from './novo-lote.component';

describe('NovoLoteComponent', () => {
  let component: NovoLoteComponent;
  let fixture: ComponentFixture<NovoLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
