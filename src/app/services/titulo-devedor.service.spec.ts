import { TestBed } from '@angular/core/testing';

import { TituloDevedorService } from './titulo-devedor.service';

describe('TituloDevedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TituloDevedorService = TestBed.get(TituloDevedorService);
    expect(service).toBeTruthy();
  });
});
