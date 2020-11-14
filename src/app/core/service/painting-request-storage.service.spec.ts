import { TestBed } from '@angular/core/testing';

import { PaintingRequestStorageService } from './painting-request-storage.service';

describe('PaintingRequestStorageService', () => {
  let service: PaintingRequestStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintingRequestStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
