import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  RESOURCE_URL = 'http://calctest.iesim.biz';
  options = {};

  constructor(private httpClient: HttpClient) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    this.options = {
      headers: headers
    };
  }

  public add(operand1: number, operand2: number) {
    return this.httpClient.get(`${this.RESOURCE_URL}/add?op1=${operand1}&op2=${operand2}`, this.options);
  }

  public subtract(operand1: number, operand2: number) {
    return this.httpClient.get(`${this.RESOURCE_URL}/subtract?op1=${operand1}&op2=${operand2}`, this.options);
  }

  public multiply(operand1: number, operand2: number) {
    return this.httpClient.get(`${this.RESOURCE_URL}/multiply?op1=${operand1}&op2=${operand2}`, this.options);
  }

  public divide(operand1: number, operand2: number) {
    return this.httpClient.get(`${this.RESOURCE_URL}/divide?op1=${operand1}&op2=${operand2}`, this.options);
  }

  public power(operand1: number, operand2: number) {
    return this.httpClient.get(`${this.RESOURCE_URL}/power?op1=${operand1}&op2=${operand2}`, this.options);
  }

  public squareRoot(operand1: number) {
    return this.httpClient.get(`${this.RESOURCE_URL}/square_root?op1=${operand1}`, this.options);
  }

  public log10(operand1: number) {
    return this.httpClient.get(`${this.RESOURCE_URL}/log10?op1=${operand1}`, this.options);
  }

  public ln(operand1: number) {
    return this.httpClient.get(`${this.RESOURCE_URL}/ln?op1=${operand1}`, this.options);
  }

  public pi() {
    return this.httpClient.get(`${this.RESOURCE_URL}/pi`, this.options);
  }

  public e() {
    return this.httpClient.get(`${this.RESOURCE_URL}/e`, this.options);
  }
}
