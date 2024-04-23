import { TestBed } from '@angular/core/testing';

import { BiometricAuthServiceService } from './biometric-auth-service.service';

describe('BiometricAuthServiceService', () => {
  let service: BiometricAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiometricAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
