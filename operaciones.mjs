//const fs = require('fs'); --forma antigua

import fs from 'fs'

const archivo = 'citas.json'

// Función para registrar citas
export const registrar = ( nombre, edad, animal, color, enfermedad) => {
    try {
        // Leer el archivo
        const citas = JSON.parse(fs.readFileSync(archivo, 'utf8'))

        // Agregar cita
        const nuevaCita = { nombre, edad, animal, color, enfermedad }
        citas.push(nuevaCita)

        // Guardar cambios
        fs.writeFileSync(archivo, JSON.stringify(citas, null, 2))
        console.log(`Registrando cita de ${nombre}, ${edad}, ${animal}, ${color}, ${enfermedad}`)
    } catch (error) {
        console.error("Error al registrar la cita.", error)
    }
};

// Función para leer citas
export const leer = () => {
    try {
        const citas = JSON.parse(fs.readFileSync(archivo, 'utf8'))
        console.log(citas)
    } catch (error) {
        console.error("No hay citas registradas.", error)
    }
};

export default { registrar, leer }

// module.exports = { registrar, leer }; -- forma antigua

// registrar en consola:   node index.js registrar Benito "2 años" perro blanco vomitos
// leer en consola:   node index.js leer