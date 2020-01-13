import { TestBed } from '@angular/core/testing';

import { DigitacaoModalService } from './digitacao-modal.service';

describe('DigitacaoModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigitacaoModalService = TestBed.get(DigitacaoModalService);
    expect(service).toBeTruthy();
  });
});
