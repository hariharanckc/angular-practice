import { TestBed } from '@angular/core/testing';

import { ScanconfigService } from './scanconfig.service';

describe('ScanconfigService', () => {
  let service: ScanconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScanconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
