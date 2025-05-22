// Importa las funciones 'registrar' y 'leer' desde el archivo 'operaciones.mjs'
import { registrar, leer } from './operaciones.mjs'

// Extrae los argumentos de la línea de comandos y los almacena en variables individuales
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

// Comprueba si el primer argumento es "registrar"
if (operacion === "registrar") {
    // Si la operación es "registrar", llama a la función pasando los valores como parámetros
    registrar(nombre, edad, animal, color, enfermedad)
}

// Comprueba si el primer argumento es "leer"
if (operacion === "leer") {
    // Si la operación es "leer", ejecuta la función para mostrar los datos almacenados
    leer()
}