const fs = require('fs-extra')

const promise1 = fs.readFile('numero1', 'utf-8')
const promise2 = fs.readFile('numero2', 'utf-8')

Promise.all([promise1, promise2]).then((arrayValues) => {
  const sum = arrayValues.reduce((sum, x) => parseInt(sum) + parseInt(x)) // recorre el array por cada elemento x que se itera y se suma en la variable sum
  console.log(sum)
})
  .catch((err) => console.log(err))
