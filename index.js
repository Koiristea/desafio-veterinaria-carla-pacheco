//const { leerCitas, registrarCita } = require('./operaciones.js'); --forma antigua

import { registrar, leer } from './operaciones.mjs'

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad)
}

if (operacion === "leer") {
    leer()
}

/*me dió error sin editar el "type" de package.json por un tema de actualización, aún cambiando los
  ".js" por ".mjs" */