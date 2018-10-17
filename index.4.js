const axios = require('axios')
const exchangeRate = async (from, to) => {
  const response = await axios
    .get(
      `http://data.fixer.io/api/latest?access_key=61fc16cfc7fe946197cb646e814ad031&base=EUR&symbols=${from},${to}`
    )

  const { rates } = response.data
  return (rates[to] / rates[from])
}

exchangeRate('JPY', 'USD')
  .then((cambioDivisa) => console.log(cambioDivisa))
  .catch((err) => console.log(err))

// ej. simple para pillarlo
const test = async () => {
  return 7
}
test().then(resultado => console.log(resultado))
