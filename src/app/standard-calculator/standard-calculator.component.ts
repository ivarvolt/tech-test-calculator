import { Component, OnInit } from '@angular/core';
import {StandardCalculatorService} from './standard-calculator.service';

@Component({
  selector: 'standard-calculator',
  templateUrl: './standard-calculator.component.html',
  styleUrls: ['./standard-calculator.component.scss']
})
export class StandardCalculatorComponent implements OnInit {
  calculatorInputField: string = '';

  constructor(public calculatorService: StandardCalculatorService) {
  }

  ngOnInit(): void {
  }

  insertValue(value: string) {
    this.calculatorInputField = this.calculatorInputField + value;
    this.keyInput({key: value});
  }

  keyInput(event: any) {
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

  add() {
    let inputArray = this.calculatorInputField.split("+");
    this.calculatorService.add(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = (Number(inputArray[0]) + Number(inputArray[1])) + '';
    })
  }

  subtract() {
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
    }, () => {
      this.calculatorInputField = (Number(inputArray[0]) - Number(inputArray[1])) + '';
    })
  }

  multiply() {
    let inputArray = this.calculatorInputField.split("*");
    this.calculatorService.multiply(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = (Number(inputArray[0]) * Number(inputArray[1])) + '';
    })
  }

  divide() {
    let inputArray = this.calculatorInputField.split("/");
    this.calculatorService.divide(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = (Number(inputArray[0]) / Number(inputArray[1])) + '';
    })
  }

  power() {
    let inputArray = this.calculatorInputField.split("^");
    this.calculatorService.power(Number(inputArray[0]), Number(inputArray[1])).subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = Math.pow(Number(inputArray[0]), Number(inputArray[1])) + '';
    })
  }

  squareRoot() {
    this.calculatorService.squareRoot(Number(this.calculatorInputField)).subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = Math.sqrt(Number(this.calculatorInputField)) + '';
    })
  }

  log10() {
    this.calculatorService.log10(Number(this.calculatorInputField)).subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = Math.log10(Number(this.calculatorInputField)) + '';
    })
  }

  ln() {
    this.calculatorService.ln(Number(this.calculatorInputField)).subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = Math.log(Number(this.calculatorInputField)) + '';
    })
  }

  pi() {
    this.calculatorService.pi().subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = Math.PI + '';
    })
  }

  e() {
    this.calculatorService.e().subscribe((response) => {
      this.calculatorInputField = response['result'];
    }, () => {
      this.calculatorInputField = Math.E + '';
    })
  }

  removeOrAddMinusOperand() {
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
    return inputWithoutLastChar.match(/[!+]/g) || inputWithoutLastChar.substring(1).match(/[!-]/g)
      || inputWithoutLastChar.match(/[!*]/g) || inputWithoutLastChar.match(/[!/]/g) || inputWithoutLastChar.match(/[!^]/g);
  }

  private lastCharIsMathOperator() {
    return this.isMathOperator(this.calculatorInputField.slice(-1))
  }
}

