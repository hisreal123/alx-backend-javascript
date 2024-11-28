const { expect} = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("getPaymentTokenFromAPI(success), where success == true", (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: "Successful response from the API" }); // 'deep' modifer indicates that the comparison should be done in a "deep" manner
      done(); // done is a callback
    });
  });
});


 //By using .deep, Chai will compare the contents of the objects or arrays, rather than just checking if they reference the same memory location.

