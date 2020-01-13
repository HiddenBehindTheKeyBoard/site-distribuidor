import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoProtestoComponent } from './requerimento-protesto.component';

describe('RequerimentoProtestoComponent', () => {
  let component: RequerimentoProtestoComponent;
  let fixture: ComponentFixture<RequerimentoProtestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequerimentoProtestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimentoProtestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
