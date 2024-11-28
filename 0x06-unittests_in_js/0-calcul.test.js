var assert = require("assert"); // 'assert' is a built-in module, it provide set of assertion function to test values in your code
const calculateNumber = require("./0-calcul");

// describe('Array', function () { //'describe' is used to group relatied test, in this case the group is labeled 'Array'
//   describe('#indexOf()', function () { // nested 'describe' fn specifies that the tests within this block should focus on the 'indexOf'
//     it('should return -1 when the value is not present', function () {
//       // 'it defines a single test case, it states that the indexOf method should return -1 when the value being searched for is not present in the array.
//       assert.equal([1, 2, 3, -2].indexOf(4), -1);
//     })
//   });
// })

describe("calculateNumber", function () {
  it("floating point whole numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it("rounding down b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it("rounding down a and b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it("rounding down a's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it("rounding up b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it("rounding up a and b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it("rounding up a's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
