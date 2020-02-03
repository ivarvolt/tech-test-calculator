import {TestBed, inject, getTestBed} from '@angular/core/testing';

import { StandardCalculatorService } from './standard-calculator.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('StandardCalculatorService', () => {
  let injector: TestBed;
  let service: StandardCalculatorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    injector = getTestBed();
    service = injector.get(StandardCalculatorService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should call add API', () => {
    const operand1 = 1;
    const operand2 = 1;
    service.add(operand1, operand2).subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/add?op1=${operand1}&op2=${operand2}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call subtract API', () => {
    const operand1 = 1;
    const operand2 = 1;
    service.subtract(operand1, operand2).subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/subtract?op1=${operand1}&op2=${operand2}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call multiply API', () => {
    const operand1 = 1;
    const operand2 = 1;
    service.multiply(operand1, operand2).subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/multiply?op1=${operand1}&op2=${operand2}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call divide API', () => {
    const operand1 = 1;
    const operand2 = 1;
    service.divide(operand1, operand2).subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/divide?op1=${operand1}&op2=${operand2}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call power API', () => {
    const operand1 = 1;
    const operand2 = 1;
    service.power(operand1, operand2).subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/power?op1=${operand1}&op2=${operand2}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call square_root API', () => {
    const operand1 = 1;
    service.squareRoot(operand1).subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/square_root?op1=${operand1}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call log10 API', () => {
    const operand1 = 1;
    service.log10(operand1).subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/log10?op1=${operand1}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call ln API', () => {
    const operand1 = 1;
    service.ln(operand1).subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/ln?op1=${operand1}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call pi API', () => {
    service.pi().subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/pi`);
    expect(req.request.method).toBe('GET');
  });

  it('should call e API', () => {
    service.e().subscribe();

    const req = httpMock.expectOne(`http://calctest.iesim.biz/e`);
    expect(req.request.method).toBe('GET');
  });
});
