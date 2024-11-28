const Utils = require("./utils")

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const calculateSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is : ${calculateSum}`)
}


module.exports = sendPaymentRequestToApi