import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { StandardCalculatorComponent } from './standard-calculator.component';
import {StandardCalculatorService} from './standard-calculator.service';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {throwError} from 'rxjs';

describe('CalculatorComponent', () => {
  let component: StandardCalculatorComponent;
  let fixture: ComponentFixture<StandardCalculatorComponent>;
  let injector: TestBed;
  let service: StandardCalculatorService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ StandardCalculatorComponent ],
      providers: [StandardCalculatorService]
    })
    .compileComponents();
    injector = getTestBed();
    service = injector.get(StandardCalculatorService);
    httpMock = TestBed.get(HttpTestingController);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate correctly based on input string', () => {
    const spyAdd = jest.spyOn(component, 'add');
    const spySubtract = jest.spyOn(component, 'subtract');
    const spyMultiply = jest.spyOn(component, 'multiply');
    const spyDivide = jest.spyOn(component, 'divide');
    const spyPower = jest.spyOn(component, 'power');
    component.calculatorInputField = '1+1';
    component.calculate();
    expect(spyAdd).toHaveBeenCalledTimes(1);

    component.calculatorInputField = '1-1';
    component.calculate();
    expect(spySubtract).toHaveBeenCalledTimes(1);

    component.calculatorInputField = '1*1';
    component.calculate();
    expect(spyMultiply).toHaveBeenCalledTimes(1);

    component.calculatorInputField = '1/1';
    component.calculate();
    expect(spyDivide).toHaveBeenCalledTimes(1);

    component.calculatorInputField = '1^1';
    component.calculate();
    expect(spyPower).toHaveBeenCalledTimes(1);
  });

  it('should add correctly numbers', async () => {
    spyOn(service, 'add').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '3+5';
    await component.add();
    expect(component.calculatorInputField).toEqual('8');
  });

  it('should subtract correctly', async () => {
    spyOn(service, 'subtract').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '10-5';
    await component.subtract();
    expect(component.calculatorInputField).toEqual('5');
  });

  it('should subtract correctly into minus numbers', async () => {
    spyOn(service, 'subtract').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '3-5';
    await component.subtract();
    expect(component.calculatorInputField).toEqual('-2');
  });

  it('should multiply correctly numbers',  async () => {
    spyOn(service, 'multiply').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '2*5';
    await component.multiply();
    expect(component.calculatorInputField).toEqual('10');
  });

  it('should divide correctly numbers', async () => {
    spyOn(service, 'divide').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '15/3';
    await component.divide();
    expect(component.calculatorInputField).toEqual('5');
  });

  it('should power correctly numbers', async () => {
    spyOn(service, 'power').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '2^2';
    await component.power();
    expect(component.calculatorInputField).toEqual('4');
  });

  it('should squareRoot correctly number', async () => {
    spyOn(service, 'squareRoot').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '25';
    await component.squareRoot();
    expect(component.calculatorInputField).toEqual('5');
  });

  it('should log10 correctly number', async () => {
    spyOn(service, 'log10').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '100';
    await component.log10();
    expect(component.calculatorInputField).toEqual('2');
  });

  it('should ln correctly numbers',  async () => {
    spyOn(service, 'ln').and.returnValue(throwError({status: 404}));
    component.calculatorInputField = '1';
    await component.ln();
    expect(component.calculatorInputField).toEqual('0');
  });

  it('should pi correctly', async () => {
    spyOn(service, 'pi').and.returnValue(throwError({status: 404}));
    await component.pi();
    expect(component.calculatorInputField).toEqual('3.141592653589793');
  });

  it('should e correctly', async () => {
    spyOn(service, 'e').and.returnValue(throwError({status: 404}));
    await component.e();
    expect(component.calculatorInputField).toEqual('2.718281828459045');
  });

});
