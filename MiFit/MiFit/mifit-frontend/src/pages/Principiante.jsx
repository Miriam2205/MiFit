import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const EntrenamientoPrincipiantes = () => {


    const entrenamientoPrincipiante = [
        {
            "titulo": "Abdominales en Casa/Gimnasio",
            "nivel": "principiante",
            "material": "sin material",
            "duracion": 30,
            "ejercicios": [
                {
                    "nombre": "Movilidad-Rotacion de columna",
                    "series": 1,
                    "repeticiones": 10,
                    "descanso": 10
                },
                {
                    "nombre": "Movilidad de hombro",
                    "series": 1,
                    "repeticiones": 10,
                    "descanso": 10
                },
                {
                    "nombre": "Crunch",
                    "series": 3,
                    "duracion": 20,
                    "descanso": 15
                },
                {
                    "nombre": "Plancha",
                    "series": 3,
                    "duracion": 20,
                    "descanso": 15
                },
                {
                    "nombre": "Plancha lateral",
                    "series": 3,
                    "duracion": 20,
                    "descanso": 15
                },
                {
                    "nombre": "Plancha con desplazamiento",
                    "series": 3,
                    "duracion": 20,
                    "descanso": 15
                }
            ]
        },
        {
            "titulo": "Consigue tu primera dominada",
            "nivel": "principiante",
            "material": "gomas, barra",
            "duracion": 45,
            "ejercicios": [
                {
                    "nombre": "Rotacion escapular",
                    "series": 1,
                    "repeticiones": 20,
                    "descanso": 30
                },
                {
                    "nombre": "Rotacion de hombro",
                    "series": 1,
                    "repeticiones": 20,
                    "descanso": 30
                },
                {
                    "nombre": "Dominadas negativas",
                    "series": 3,
                    "repeticiones": 8,
                    "descanso": 2
                },
                {
                    "nombre": "Dominadas con goma",
                    "series": 3,
                    "repeticiones": 12,
                    "descanso": 2
                },
                {
                    "nombre": "Remo con barra",
                    "series": 2,
                    "repeticiones": 15,
                    "descanso": 2
                },
                {
                    "nombre": "Estiramiento de espalda",
                    "series": 3,
                    "repeticiones": 15,
                    "descanso": 2
                }
            ]
        },
        {
            "titulo": "Entrenamiento de HIIT",
            "nivel": "principiante",
            "material": "sin material",
            "duracion": 45,
            "ejercicios": [
                {
                    "nombre": "Movilidad de flexion de tobillo",
                    "series": 1,
                    "repeticiones": 15,
                    "descanso": 30
                },
                {
                    "nombre": "Flexiones escapulares",
                    "series": 1,
                    "repeticiones": 15,
                    "descanso": 30
                },
                {
                    "nombre": "Burpees",
                    "series": 3,
                    "repeticiones": 16,
                    "descanso": 30
                },
                {
                    "nombre": "Sentadilla con salto",
                    "series": 3,
                    "repeticiones": 12,
                    "descanso": 2
                }
            ]
        }
    ]
    return (
        <div>
            <h2>Entrenamientos para principiantes</h2>
            <ul>
                {EntrenamientoPrincipiante.map(ejercicio => (
                    <li key={ejercicio.titulo}>
                        <strong>{ejercicio.titulo}</strong>
                        <p>Material{ejercicio.material} </p>
                        <p>Duración: {ejercicio.duracion} min</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default EntrenamientoPrincipiantes;