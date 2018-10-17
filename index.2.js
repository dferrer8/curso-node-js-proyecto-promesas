const axios = require('axios')
const exchangeRate = (from, to) => {
  // consulta a la API de Fixer
  // http://data.fixer.io/api/latest
  //   ? access_key = API_KEY
  //   & base = USD
  //   & symbols = GBP,JPY,EUR

  // Make a request for a user with a given ID
  // restringido a base = EUR
  axios
    .get(
      `http://data.fixer.io/api/latest?access_key=61fc16cfc7fe946197cb646e814ad031&base=EUR&symbols=${from},${to}`
    )
    .then(response => {
      const { rates } = response.data
      const fromDivisa = rates[from]
      const toDivisa = rates[to]
      console.log(fromDivisa, toDivisa)
      console.log(toDivisa / fromDivisa)
    })
    .catch(error => {
      console.log(error)
    })
}

// console.log(exchangeRate('EUR', 'USD'))
// exchangeRate()
exchangeRate('JPY', 'USD')
