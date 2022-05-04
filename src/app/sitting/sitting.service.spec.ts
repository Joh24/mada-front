import { TestBed } from '@angular/core/testing';

import { SittingService } from './sitting.service';

describe('SittingService', () => {
  let service: SittingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SittingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
