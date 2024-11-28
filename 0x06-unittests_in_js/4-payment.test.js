const sinon = require('sinon')
const { expect, util } = require('chai')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')

/**
 * Goal: create a suit create a counterfiet of the function
 * using Stub:
 * stub functon Utils.calculateNumber to always the same number 10
 * verify the stub is been calld with type = SUM, a =100, b = 20
 * add spy to verify that console.log is loggin the correct message .
*/

describe("sendPaymentRequestToApi", () => {
  it("sendPaymentRequestToApi calls console.log with the right arguments", () => {
    const spyFunction = sinon.spy(console); // wrappes the console object allowind you to track calls to console.log
    const stubFunction = sinon.stub(Utils, 'calculateNumber');

    stubFunction.returns(10) // always return the same number 10
    sendPaymentRequestToApi(100, 20),
    expect(stubFunction.calledWith('SUM', 100, 20)).to.be.true; // verify that the fn is always called with this parameters
    // expect(stubFunction.callCount).to.be.equal(1);
    expect(spyFunction.log.calledWith('The total is: 10')).to.be.true; // add spy to verify that console.log is loggin the correct message
    // expect(spyFunction.log.callCount).to.be.equal(1);
    stubFunction.returns();
    spyFunction.log.restore(); // cus we added (console) as a parameter
  });
});