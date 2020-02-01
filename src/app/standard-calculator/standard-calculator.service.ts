import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StandardCalculatorService {
  RESOURCE_URL = 'http://calctest.iesim.biz';
  options = {};

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    this.options = {
      headers: headers
    };
  }

  add(operand1: number, operand2: number) {
    return this.http.get(`${this.RESOURCE_URL}/add?op1=${operand1}&op2=${operand2}`, this.options);
  }

  subtract(operand1: number, operand2: number) {
    return this.http.get(`${this.RESOURCE_URL}/subtract?op1=${operand1}&op2=${operand2}`, this.options);
  }

  multiply(operand1: number, operand2: number) {
    return this.http.get(`${this.RESOURCE_URL}/multiply?op1=${operand1}&op2=${operand2}`, this.options);
  }

  divide(operand1: number, operand2: number) {
    return this.http.get(`${this.RESOURCE_URL}/divide?op1=${operand1}&op2=${operand2}`, this.options);
  }

  power(operand1: number, operand2: number) {
    return this.http.get(`${this.RESOURCE_URL}/power?op1=${operand1}&op2=${operand2}`, this.options);
  }

  squareRoot(operand1: number) {
    return this.http.get(`${this.RESOURCE_URL}/square_root?op1=${operand1}`, this.options);
  }

  log10(operand1: number) {
    return this.http.get(`${this.RESOURCE_URL}/log10?op1=${operand1}`, this.options);
  }

  ln(operand1: number) {
    return this.http.get(`${this.RESOURCE_URL}/ln?op1=${operand1}`, this.options);
  }

  pi() {
    return this.http.get(`${this.RESOURCE_URL}/pi`, this.options);
  }

  e() {
    return this.http.get(`${this.RESOURCE_URL}/e`, this.options);
  }
}
