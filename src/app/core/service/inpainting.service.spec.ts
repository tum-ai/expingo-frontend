import { TestBed } from '@angular/core/testing';

import { InpaintingService } from './inpainting.service';

describe('InpaintingService', () => {
  let service: InpaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InpaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
