// const sinon = require('sinon');
// const Utils = require('./utils');
// const { expect } = require('chai');
// const sendPaymentRequestToApi = require('./3-payment');

// /**
// * the purpose of spy is to track calls to this function
// * including how many times it was called and what arguements were passed to it
// * 1. check if the function was called
// * 2. how many times the functon was called
// * 3. what arguments were passed to the function
// */

// describe("sendPaymentRequestToApi", () => {
//   it("sendPaymentRequestToApi uses the calculateNumber method of Utils", () => {
//     const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

//     sendPaymentRequestToApi(100, 20);
//     expect(calculateNumberSpy.called).to.be.true(1); // check if the function was called
//     expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true; // check specific arguements it is calld with
//     calculateNumberSpy.restore(); // used to revert the behavior of the spy to its original state

//   });
// });

const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("sendPaymentRequestToApi uses the calculateNumber method of Utils", () => {
    const bigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
});
