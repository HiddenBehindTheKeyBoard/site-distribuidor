import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtestoComponent } from './protesto.component';

describe('ProtestoComponent', () => {
  let component: ProtestoComponent;
  let fixture: ComponentFixture<ProtestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
