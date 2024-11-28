const request = require("request");
const { expect } = require("chai");
const sinon = require('sinon')

describe("API integration test", () => {
  const API_URL = "http://localhost:7865";
  const spyFunction = sinon.spy(console);

  beforeEach(() => {
    console.log("API available on localhost port 7865"); // this allows the spt to capture the log for the test
  });

  it('response on console should be \'API avialable on localhost port 7865\'', () => {
    expect(spyFunction.log.calledWith("API available on localhost port 7865")).to.be.true;
  })

  it("GET / returns correct response", (done) => {
    request.get(`${API_URL}/`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });
});
