const getPaymentTokenFromAPI = async (success) => {
  return new promise((resolve, _) => {
    if (success) {
      resolve({ data: "Successful response from the API" });
    }
  })
}

module.exports = getPaymentTokenFromAPI