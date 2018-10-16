const fs = require('fs')

let numero1

const getData = 
  (fileName, type) => {
    return new Promise((resolve, reject) => { // resuelve devolviendo una promesa
        fs.readFile(fileName, type, (err, data) => {
          err ? reject(err) : resolve(parseInt(data)) // callback error o devuelve los datos
        })
      })
  }

  const getData = 
  (fileName, type) => new Promise((resolve, reject) => { // resuelve devolviendo una promesa
        fs.readFile(fileName, type, (err, data) => {
          err ? reject(err) : resolve(parseInt(data)) // callback error o devuelve los datos
        })
      })
  
// este era como el metodo de calculo anterior
//---1
//    ---2

getData('numero1', 'utf-8')
  // .then(fileContent => {
  //   numero1 = fileContent
  .then(numero1 => {
    return getData('numero2')
  })
  .then(numero2 => console.log(`El resultado de la suma es  ${numero1 + numero2}`))
  .catch(err => console.log(err))