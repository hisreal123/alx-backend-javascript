/* eslint-disable no-unused-vars */
/* eslint-disable */

export default class Building {
  constructor(sqft  = 0) {
     if (
      this.constructor !== Building){
      typeof this.evacuationWarningMessage !== "function"
    }
  }

  // getter
  get sqft() {  return this._sqft; }

  // setter
  set sqft(value) {
    if (value < 0) {
      throw new Error("Square feet cannot be negative");
      }


}
