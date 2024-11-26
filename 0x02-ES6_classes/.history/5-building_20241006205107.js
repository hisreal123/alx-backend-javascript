/* eslint-disable no-unused-vars */
/* eslint-disable */

export default class Building {
  constructor(sqft) {
    if (new.target === Building){
      throw new Error("Cannot instantiate directly");
    }
  }

  // getter
  get sqft() {
    return this._sqft;
    }

    
}
