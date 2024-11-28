/* eslint-disable no-unused-vars */
/* eslint-disable */

export default class Building {
  constructor(sqft  = 0) {
    if (new.constructor === Building){
      throw new Error("Cannot instantiate directly");
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