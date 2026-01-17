
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pagina-musculo.css";
import "../styles/reset.css"

export const EntrenamientoGluteo = () => {
    const EntrenamientoGluteo = [

        {
            "imagen": "/hiptrust.gif",
            "nombre": "Hip Trust",
            "descripción":"Deja la espalda alta apoyada en un banco y coloca una mancuerna o barra sobre la cadera. Con los pies firmes en el suelo, empuja la cadera hacia arriba apretando glúteos y baja de forma controlada.",
            "series": 3,
            "repeticiones": 12,
            "descanso": 90
        },
        {
            "imagen": "/sentadillabulgara.gif",
            "nombre": "Sentadilla Búlgara",
            "descripción": "Coloca un pie apoyado detrás en un banco y el otro delante. Baja doblando la rodilla delantera manteniendo el torso recto y sube empujando con la pierna que está adelante.",
            "series": 3,
            "repeticiones": 12,
            "descanso": 90
        },
        {
            "imagen": "/pesomuertogluteo.gif",
            "nombre": "Peso muerto para gluteo",
            "descripción": "De pie, con mancuernas o barra, inclínate hacia adelante desde la cadera manteniendo la espalda recta y baja el peso hasta media espinilla. Vuelve arriba apretando glúteos y llevando la cadera hacia adelante.",
            "series": 3,
            "duracion": 12,
            "descanso": 90
        },
        {
            "imagen": "/aducciones.gif",
            "nombre": "Aducciones de cadera en máquina",
            "descripción": "Acostado de lado, eleva la pierna de abajo hacia el techo manteniéndola estirada. Sube y baja controladamente sin mover la cadera.",
            "series": 3,
            "duracion": 20,
            "descanso": 15
        },
        {
            "imagen": "/sentadillasumo.gif",
            "nombre": "Con los pies más abiertos que los hombros y puntas hacia afuera, sujeta una mancuerna entre las piernas. Baja en sentadilla manteniendo la espalda recta y sube empujando con los glúteos y piernas internas.",
            "descripción": "",
            "series": 3,
            "duracion": 20,
            "descanso": 15
        }

    ]
    return (
        <div className="Entrenamiento-container">
            <h2 className="Titulo">Entrenamiento de Glúteo</h2>
            <h3 className="Subtitulo">Nivel: Principiante</h3>
            <h3 className="Subtitulo">Material: Goma</h3>
            <ul className="Lista">
                {EntrenamientoGluteo.map(ejercicio => (
                    <li key={ejercicio.nombre} className="Item-ejercicio">
                        <img src={ejercicio.imagen}
                            alt={ejercicio.nombre}
                            className="Imagen-ejercicio" />

                        <div>
                            <h3 className="Nombre-ejercicio">{ejercicio.nombre}</h3>
                            <p className="Contenido-ejercicio"><strong>Descripción:</strong> {ejercicio.descripción}</p>
                            <p className="Contenido-ejercicio"><strong>Series:</strong> {ejercicio.series}</p>
                            <p className="Contenido-ejercicio"><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
                            <p className="Contenido-ejercicio"><strong>Duración:</strong> {ejercicio.duracion}</p>
                            <p className="Contenido-ejercicio"><strong>Descanso:</strong> {ejercicio.descanso}</p>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default EntrenamientoGluteo;

