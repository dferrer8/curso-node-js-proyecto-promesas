const opositores = [{
  id: 1,
  nombre: 'Pepe',
  especialidad: 'Informática'
}, {
  id: 2,
  nombre: 'Leyre',
  especialidad: 'Sistemas y aplicaciones informáticas'
}]

const notas = [{
  id: 1,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 1,
  prueba: 'Teórica',
  nota: 6.5
}, {
  id: 2,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 2,
  prueba: 'Teórica',
  nota: 6.5
}
]

// crea promesa para obtener los datos del opositor 1
const getOpositor = (id) => {
  return new Promise((resolve, reject) => {
    const opositor = opositores.find((opositor) => opositor.id === id)
    if (opositor) {
      resolve(opositor)
    } else {
      reject(new Error(`No se ha encontrado al opositor con id: ${id}.`))
    }
  })
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

/* const getResultado = (id) => {
  let nombre
  getOpositor(id)
    .then(opositor => {
      nombre = opositor.nombre
      return getNotas(id)
    })
    .then(notas => {
    // const mapNotas = notas.map(nota => nota.nota)
    // const sumaNotas = mapNotas.reduce((sum,x) => sum +x)
      const nota = notas
        .map(nota => nota.nota)
        .reduce((sum, x) => (sum + x) / notas.length)
      console.log(`Notas: ${nota}`)
      console.log(`Nombre: ${nombre}`)
    })
}

getResultado(1)
 */

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
getResultado(1)
