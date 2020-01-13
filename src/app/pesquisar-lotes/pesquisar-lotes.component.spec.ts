import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarLotesComponent } from './pesquisar-lotes.component';

describe('PesquisarLotesComponent', () => {
  let component: PesquisarLotesComponent;
  let fixture: ComponentFixture<PesquisarLotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarLotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
