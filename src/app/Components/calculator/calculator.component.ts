import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  currentNumber = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;

  public getNumber(value: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = value;
      this.waitForSecondNumber = false;
    } else {
      if (this.currentNumber === '0') {
        this.currentNumber = value;
      } else {
        this.currentNumber += value;
      }
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: string, secondOp: number) {
    switch (op) {
      case '+':
        return this.firstOperand! + secondOp;
      case '-':
        return this.firstOperand! - secondOp;
      case '*':
        return this.firstOperand! * secondOp;
      case '/':
        return this.firstOperand! / secondOp;
      default:
        return secondOp;
    }
  }

  public getOperation(op: string) {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  public getResult() {
    if (this.operator && this.firstOperand !== null) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = null;
      this.operator = null;
      this.waitForSecondNumber = false;
    }
  }

  public backspace() {
    if (this.currentNumber.length > 1) {
      this.currentNumber = this.currentNumber.slice(0, -1);
    } else {
      this.currentNumber = '0';
    }
  }
}
