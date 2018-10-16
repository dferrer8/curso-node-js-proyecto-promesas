const { opositores, notas } = require('./datos.js')

// crea promesa para obtener los datos del opositor 1
const getOpositor = async (id) => {
  const opositor = await opositores.find((opositor) => opositor.id === id)
  if (opositor) {
    return opositor
  } else {
    throw (new Error(`No se ha encontrado al opositor con id: ${id}.`))
  }
}

getOpositor(1)
  .then((opositor) => console.log(`Opositor: ${opositor.nombre}`))
  .catch((err) => console.log(err))

const getNotas = async (id) => {
  const notasOpositor = await notas.filter(nota => nota.id === id)
  if (notasOpositor.length) return (notasOpositor)
  else throw (new Error(`No se han encontrado las notas del opositor con id: ${id}.`))
}

getNotas(1)
  .then(notas => notas.forEach(nota => {
    console.log(`${nota.nota} - ${nota.prueba}`)
  }))
  .catch(err => console.log(err))

// con promises.all
const getResultado = id => {
  Promise.all([getOpositor(id), getNotas(id)])
    .then(datos => {
      const { nombre } = datos[0]
      console.log(datos[1])
      const nota = datos[1]
        .map(nota => nota.nota)
        .reduce((sum, x) => (sum + x) / datos[1].length) // correccion de la reduccion era un +, no una coma - REVISAR array.reduce  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce

      console.log(`Notas: ${nota}`)
      console.log(`Nombre: ${nombre}`)
    })
    .catch(err => console.log(err))
}
getResultado(1)
