import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarDevedoresComponent } from './pesquisar-devedores.component';

describe('PesquisarDevedoresComponent', () => {
  let component: PesquisarDevedoresComponent;
  let fixture: ComponentFixture<PesquisarDevedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarDevedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarDevedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
