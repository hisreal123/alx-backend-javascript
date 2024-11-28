const Utils = { // Module object
   calculateNumber(type, a, b) { // named property
    if (type === "SUM") {
      return Math.round(a) + Math.round(b);
    }
    if (type === "SUBTRACT") {
      return Math.round(a) - Math.round(b);
    }
    if (type === "DIVIDE") {
      return Math.round(b) === 0 ? "Error" : Math.round(a) / Math.round(b);
    }
    return 0;
  }
}
module.exports = Utils;

// okay, to use this File, you can call the Utils.calculateNumber()
// ENCAPSULATION: the calculateNumber is encapsulated inside of the Utils.
