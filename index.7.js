const axios = require('axios')

// currency
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

// Countries
const getCountriesAsyncAwait = async (currencyCode) => {
  const response = await axios
    .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)

  return response.data.map((country) => country.name)
}

getCountriesAsyncAwait('COP')
  .then((countries) => {
    console.log(countries)
  })

/* const convertCurrency = (from, to, amount) => {
  return exchangeRate(from, to)
    .then(cambioDivisa => amount * cambioDivisa)
} */

const convertCurrency = (from, to, amount) =>
  exchangeRate(from, to)
    .then(cambioDivisa => (amount * cambioDivisa).toFixed(2))

convertCurrency('EUR', 'USD', 100)
  .then(total => console.log(`He obtenido ${total} dolares`))
  .catch(err => console.log(err))

const getResultado = (from, to, amount) => {
  convertCurrency(from, to, amount).then(total => {
    getCountriesAsyncAwait(to).then(paises => {
      console.log(`Tienes un total de ${total} ${to} y los puedes gastar en:`)
      paises.forEach(pais => {
        console.log(pais)
      })
    })
  })
}

getResultado('EUR', 'USD', 100)
