import { TestBed } from '@angular/core/testing';

import { MaskingService } from './masking.service';

describe('ApiService', () => {
  let service: MaskingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaskingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
