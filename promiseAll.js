const fs = require('fs')

const getData = (fileName, type) => new Promise(
  (resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(parseInt(data))
    })
  }
)
// leo los ficheros - almaceno las promesas
const promise1 = getData('numero1', 'utf-8')
const promise2 = getData('numero2', 'utf-8')
// recibe un array de promesas
// llama al metodo reduce del array

// Promise retorna una promera que ser resolvera o no
Promise.all([promise1, promise2]).then((arrayValues) => {
  const sum = arrayValues.reduce((sum, x) => sum + x) // recorre el array por cada elemento x que se itera y se suma en la variable sum
  console.log(sum)
})
.catch(err) => console.log(err)

// si no se resuelve alguna retornará un error. Dado que devuelve un array de promesas

