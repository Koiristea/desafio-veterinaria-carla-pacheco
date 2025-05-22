// Importa el módulo 'fs' de Node.js para trabajar con el sistema de archivos
import fs from 'fs'

// Define una constante 'archivo' que contiene el nombre del archivo JSON donde se guardarán las citas
const archivo = 'citas.json'

// Exporta una función llamada 'registrar' que toma varios parámetros: nombre, edad, animal, color y enfermedad
export const registrar = (nombre, edad, animal, color, enfermedad) => {
    try {
        // Lee el contenido del archivo JSON y lo convierte en un objeto JavaScript
        const citas = JSON.parse(fs.readFileSync(archivo, 'utf8'))

        // Crea un nuevo objeto 'nuevaCita' con los parámetros proporcionados
        const nuevaCita = { nombre, edad, animal, color, enfermedad }

        // Añade el nuevo objeto 'nuevaCita' al array de citas
        citas.push(nuevaCita)

        // Escribe el array de citas actualizado de vuelta al archivo JSON
        fs.writeFileSync(archivo, JSON.stringify(citas, null, 2))

        // Imprime un mensaje en la consola indicando que la cita ha sido registrada
        console.log(`Registrando cita de ${nombre}, ${edad}, ${animal}, ${color}, ${enfermedad}`)
    } catch (error) {
        // Imprime un mensaje de error en la consola si ocurre un problema al registrar la cita
        console.error("Error al registrar la cita.", error)
    }
}

// Exporta una función llamada 'leer' que no toma parámetros
export const leer = () => {
    try {
        // Lee el contenido del archivo JSON y lo convierte en un objeto JavaScript
        const citas = JSON.parse(fs.readFileSync(archivo, 'utf8'))

        // Imprime el contenido del archivo JSON en la consola
        console.log(citas)
    } catch (error) {
        // Imprime un mensaje de error en la consola si no hay citas registradas
        console.error("No hay citas registradas.", error)
    }
}

// Exporta las funciones 'registrar' y 'leer' como valores por defecto del módulo
export default { registrar, leer }