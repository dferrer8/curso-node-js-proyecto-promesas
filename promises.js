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

/* getOpositor(5)
  .then((opositor) => console.log(`Opositor: ${opositor.nombre}`))
  .catch((err) => console.log(err)) */

// crea promesa para obtener las notas del opositor 1

/* const getNotas = (id) => {
  return new Promise((resolve, reject) => {
    const notasOpositor = notas.filter((notas) => notas.id === id)
    if (notasOpositor) {
      resolve(notasOpositor)
    } else {
      reject(new Error(`No se ha encontrado al opositor con id: ${id}.`))
    }
  })
}

getNotas(1)
  .then((notasOpositor) => console.log(`Notas: ${notasOpositor.nota}`))
  .catch((err) => console.log(err))
 */

/* const getNotas = (id) => {
  return new Promise((resolve, reject) => {

  });
} */
const getNotas = (id) => new Promise((resolve, reject) => { // find solo muestra el 1º elemento del array y id:1 tiene dos notas
  const notasOpositor = notas.filter(nota => nota.id === id)
  if (notasOpositor.length) resolve(notasOpositor)
  else reject(new Error(`No se han encontrado las notas del opositor con id: ${id}.`))
})

getNotas(1)
  .then((notasOpositor) => console.log(`Notas recibidas`)) // : ${notasOpositor.nota}`))
  .catch((err) => console.log(err))

getNotas(5)
  .then((notasOpositor) => console.log(`Notas recibidas`)) // : ${notasOpositor.nota}`))
  .catch((err) => console.log('Este es el error:' + err + '------------------'))
// crea promesa para obtener el nombre y las notas del opositor1
