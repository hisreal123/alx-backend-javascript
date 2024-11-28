const sinon = require("sinon");
const { expect} = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");


/**
 * testing an async function
*/
describe("getPaymentTokenFromAPI", () => {
  it("should return a payment token where success == true",  (done) => {
    getPaymentTokenFromAPI(true)
    .then((res) => {
      expect(res).to.be.equal({ data: "Successful response from the API" });
      done();
    });
  })
});
