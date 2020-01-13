import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalEdicaoComponent } from './adicional-edicao.component';

describe('EdicaoComponent', () => {
  let component: AdicionalEdicaoComponent;
  let fixture: ComponentFixture<AdicionalEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionalEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionalEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
