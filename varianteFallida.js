const fs = require('fs')
let numero1
let numero2
fs.readFile('./numero1', 'utf-8', (err, numero) => {
  (err) ? console.log(err) : numero1 = numero
})
fs.readFile('./numero2', 'utf-8', (err, numero) => {
  err ? console.log(err) : (numero2 = numero)
})
while (!numero1 && !numero2) {} // No hagas nada hasta que no existan los numeros
console.log(`El resultado de la suma es  ${numero1 + numero2}`)

// las promesas no retornan nunca: Node.js event loop
// nuestro programa se queda colgado :-(
// Intento de leerlos a la vez
