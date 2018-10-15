const fs = require('fs')
// mas optimo, pero no es asincrono
fs.readFile('./numero1', 'utf-8', (err, data) => {
  if (err) console.log(err)
  const numero1 = parseInt(data)
  fs.readFile('./numero2', 'utf-8', (err, data) => {
    if (err) console.log(err)
    const numero2 = parseInt(data)
    console.log(`La suma es  ${parseInt(numero1) + parseInt(numero2)}`)
  })
})
