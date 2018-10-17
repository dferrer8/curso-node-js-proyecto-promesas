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

const getCountries = async (currencyCode) => {
  return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => { return response.data.map((country) => country.name) }
  )
}

getCountries('CAD').then((countries) => {
  console.log(countries)
})

const getCountriesAsyncAwait = async (currencyCode) => {
  const response = await axios
    .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)

  return response.data.map((country) => country.name)
}

getCountriesAsyncAwait('COP').then((countries) => {
  console.log(countries)
})
