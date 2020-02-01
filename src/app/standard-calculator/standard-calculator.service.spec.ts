import { TestBed, inject } from '@angular/core/testing';

import { StandardCalculatorService } from './standard-calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardCalculatorService]
    });
  });

  it('should be created', inject([StandardCalculatorService], (service: StandardCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
