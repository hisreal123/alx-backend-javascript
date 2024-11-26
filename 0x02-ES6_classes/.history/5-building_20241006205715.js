/* eslint-disable no-unused-vars */
/* eslint-disable */

export default class Building {
  constructor(sqft  = 0) {
     if (
      this.constructor !== Building &&
      typeof this.evacuationWarningMessage !== "function"
    ) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }

    this._sqft = sqft;
  }

  // getter
  get sqft() {  return this._sqft; }

  // setter
  set sqft(value) {
    if (value < 0) {
      throw new Error("Square feet cannot be negative");
      }
    }
}
