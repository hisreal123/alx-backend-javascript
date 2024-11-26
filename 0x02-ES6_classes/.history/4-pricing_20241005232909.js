/* eslint-disable no-unused-vars */
/* eslint-disable */

import Currency from "./3-currency";

export class Pricing {
  constructor(amount, currency) {
    this._amount = amount,
    this._currency = currency
  }

  // getter
  get amount() { this._amount }
  get currency() {this.currency = this.currency}

  // setter
  set amount(amount) {
    if (amount < 0) {
      throw new Error('Amount cannot be negative');
    }
    this._amount = amount;
  }

  set currency(currency) {
    
  }
}