import { TestBed } from '@angular/core/testing';

import { ValidaService } from './valida.service';

describe('ValidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidaService = TestBed.get(ValidaService);
    expect(service).toBeTruthy();
  });
});
