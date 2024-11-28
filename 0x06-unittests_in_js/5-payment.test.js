const sinon = require("sinon");
const { expect, util } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");

/**
 * 
*/

describe("sendPaymentRequestToApi", () => {
  // test1

  let spy;

  beforeEach(() => {
    if(!spy) {
      spy = sinon.spy(console);
    }
  })

  afterEach(() => {
    spy.log.resetHistory()
  })

  it("should call calculateNumber with correct arguments", () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith("The total is: 120")).to.be.true; // verify the console is loging "The total is : 120"
    expect(spy.log.calledOnce).to.be.true; // verify the console is called once
  });

  // test2
  it("should call calculateNumber with correct arguments", () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });
});
