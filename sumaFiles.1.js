const fs = require('fs')
const numero1 = fs.readFile('./numero1', 'utf-8',
  (err, numero1) => {
    if (err) throw err
  })

const numero2 = fs.readFile('./numero2', 'utf-8',
  (err, numero2) => {
    if (err) throw err
  })
// al ir avanzando asincronamente llega aquí sin datos
console.log(`El resultado de la suma es  ${parseInt(numero1) + parseInt(numero2)}`)

/* const fs = require('fs')
fs.readFile('./numero1', 'utf-8', (err, numero1) => {
  if (err) throw err
  fs.readFile('./numero2', 'utf-8', (err, numero2) => {
    if (err) throw err
    console.log(`El resultado de la suma es  ${parseInt(numero1) + parseInt(numero2)}`)
  })
}) */
