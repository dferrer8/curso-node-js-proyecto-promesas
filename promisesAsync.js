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

const getNotas = (id) => new Promise((resolve, reject) => { // find solo muestra el 1º elemento del array y id:1 tiene dos notas
  const notasOpositor = notas.filter(nota => nota.id === id)
  if (notasOpositor.length) resolve(notasOpositor)
  else reject(new Error(`No se han encontrado las notas del opositor con id: ${id}.`))
})

getNotas(1)
  .then((notasOpositor) => console.log(`Notas recibidas`)) // : ${notasOpositor.nota}`))
  .catch((err) => console.log(err))

// con promises.all
const getResultado = id => {
  Promise.all([getOpositor(id), getNotas(id)])
    .then(datos => {
      const { nombre } = datos[0]
      const nota = datos[1]
        .map(nota => nota.nota)
        .reduce((sum, x) => (sum, x) / datos[1].length)
      console.log(`Notas: ${nota}`)
      console.log(`Nombre: ${nombre}`)
    })
    .catch(err => console.log(err))
}
// getResultado(1)
