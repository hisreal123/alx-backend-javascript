var assert = require('assert'); // 'assert' is a built-in module, it provide set of assertion function to test values in your code
const calculateNumber = require('./0-calcul');

// describe('Array', function () { //'describe' is used to group relatied test, in this case the group is labeled 'Array'
//   describe('#indexOf()', function () { // nested 'describe' fn specifies that the tests within this block should focus on the 'indexOf'
//     it('should return -1 when the value is not present', function () {
//       // 'it defines a single test case, it states that the indexOf method should return -1 when the value being searched for is not present in the array.
//       assert.equal([1, 2, 3, -2].indexOf(4), -1);
//     })
//   });
// })


describe("calculateNumber", function () {
  it("should return the sum of rounded numbers", function () {
    assert.equal(calculateNumber(2.3, 3.5), 6); // 2.4 = 6
    assert.equal(calculateNumber(2.5, 3.5), 7); // 3 + 4 = 7
    assert.equal(calculateNumber(0.1, 0.9), 1); // 0 + 1 = 7
  })
 });