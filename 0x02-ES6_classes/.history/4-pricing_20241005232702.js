/* eslint-disable no-unused-vars */
/* eslint-disable */

import Currency from "./3-currency";

export class Pricing {
  constructor(amount, currency) {
    this._amount = amount,
    this._currency = currency
  }

  // getter
  get amount() {
    if (typeof amount != "number"){
      throw new TypeError("Invalid amount")
    }
    return this._amount
  }

  
}