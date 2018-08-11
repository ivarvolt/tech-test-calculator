import { Component } from '@angular/core';
import {CalculatorService} from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  calculatorInputField: string = '';
  
  constructor(public calculatorService: CalculatorService) {
  }
  
  keyInput(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.calculate();
    } else {
      if (this.isMathOperator(event.key) && this.isSecondMathOperator()) {
        this.calculatorInputField = this.calculatorInputField.substring(0, this.calculatorInputField.length -1);
        this.calculate();
      }
      if (!this.isNumber(event.key) && !this.isMathOperator(event.key) && event.key !== "Control" && event.key !== "Shift" && event.key !== "Alt" ) {
        this.calculatorInputField = this.calculatorInputField.slice(0, -1);
      }
    }
  }
  
  calculate() {
    if (this.calculatorInputField.match(/[!a-zA-Z]/g)) {
      this.calculatorInputField = '';
    }
    if (this.calculatorInputField.match(/[!+]/g)) {
      this.add();
    } else if (this.calculatorInputField.match(/[!-]/g)) {
      this.subtract();
    } else if (this.calculatorInputField.match(/[!*]/g)) {
      this.multiply();
    } else if (this.calculatorInputField.match(/[!/]/g)) {
      this.divide();
    } else if (this.calculatorInputField.match(/[!^]/g)) {
      this.power();
    }
  }
  
  public add() {
    let inputArray = this.calculatorInputField.split("+");
    this.calculatorService.add(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public subtract() {
    let inputArray: string[] = [];
    if (this.calculatorInputField.charAt(0) === "-") {
      let secondMinusOperandIndex = this.calculatorInputField.indexOf("-", this.calculatorInputField.indexOf("-") + 1);
      inputArray[0] = this.calculatorInputField.substring(0, secondMinusOperandIndex);
      inputArray[1] = this.calculatorInputField.substring(secondMinusOperandIndex + 1);
    } else {
      inputArray = this.calculatorInputField.split("-");
    }
    this.calculatorService.subtract(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public multiply() {
    let inputArray = this.calculatorInputField.split("*");
    this.calculatorService.multiply(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public divide() {
    let inputArray = this.calculatorInputField.split("/");
    this.calculatorService.divide(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public power() {
    let inputArray = this.calculatorInputField.split("^");
    this.calculatorService.power(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public square_root() {
    this.calculatorService.square_root(Number(this.calculatorInputField)).subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public log10() {
    this.calculatorService.log10(Number(this.calculatorInputField)).subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public ln() {
    this.calculatorService.ln(Number(this.calculatorInputField)).subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public pi() {
    this.calculatorService.pi().subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public e() {
    this.calculatorService.e().subscribe((response) => {
      this.calculatorInputField = response['result'];
    })
  }
  
  public removeOrAddMinusOperand() {
    if (this.calculatorInputField.charAt(0) === "-") {
      this.calculatorInputField = this.calculatorInputField.substring(1);
    } else {
      this.calculatorInputField = "-" + this.calculatorInputField
    }
  }
  
  private isNumber(value: string | number): boolean {
    return !isNaN(Number(value.toString()));
  }
  
  private isMathOperator(key: string) {
    return key === '+' || key === '-' || key === '*' || key === '/' || key === '^';
  }
  
  private isSecondMathOperator() {
    let inputWithoutLastChar = this.calculatorInputField.substring(0, this.calculatorInputField.length -1);
    return inputWithoutLastChar.indexOf("+") >= 1 || inputWithoutLastChar.indexOf("-") >= 1
      || inputWithoutLastChar.indexOf("*") >= 1 || inputWithoutLastChar.indexOf("/") >= 1 || inputWithoutLastChar.indexOf("^") >= 1
  }
  
  private lastCharIsMathOperator() {
    return this.isMathOperator(this.calculatorInputField.slice(-1))
  }
}
