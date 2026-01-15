import { NavLink } from "react-router-dom";
import App from "../App";
import React from "react";
import "../styles/Paginamusculo.css";
import "../styles/reset.css"

export const EntrenamientoHiit = () => {
  const entrenamientoHit = [
    {
      "imagen": "/Movilidadtobillo.jpg",
      "nombre": "Movilidad de flexion de tobillo",
      "descripción": "Vas a necesitar una goma y vas a atarla a un soporte y con el tobillo vas a hacer movimientos como si fueses hacia delante. Lo puedes hacer apoyando el pie en un cajón o en el suelo",
      "series": 1,
      "repeticiones": 15,
      "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/flexiones explosivas.gif",
      "nombre": "Flexiones eplosivas",
      "descripción":"Las flexiones explosivas son como las flexiones normales pero la diferencia es que vas a bajar y subir con más fuerza y rápidas de manera que cuando subas casi tus manos se despeguen del suelo",
      "series": 1,
      "repeticiones": 20,
      "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "burpees.gif",
      "nombre": "Burpees",
      "descripción": "Colócate de pie con los pies al ancho de los hombros. Agáchate y coloca las manos en el suelo frente a ti. Salta con los pies hacia atrás para adoptar una posición de plancha. Realiza una flexión de brazos, luego salta con los pies hacia adelante, volviendo a la posición de cuclicllas. Finalmente, salta hacia arriba explosivamente.",
      "series": 3,
      "repeticiones": 16,
      "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "sentadillasalto.gif",
      "nombre": "Sentadilla con salto",
      "descripción":"La sentadilla con salto es igual que la sentadilla normal solo que al subir vas a hacer un salto , de manera que bajar y subir lo vas a hacer rápido.",
      "series": 3,
      "repeticiones": 12,
      "descanso": "1 minuto y 30 segundos"
    },

  ]
  return (
    <div className="Entrenamiento-container">
      <h2 className="Titulo">Entrenamiento HIIT</h2>
      <h3 className="Subtitulo">Nivel: Principiante</h3>
      <h3 className="Subtitulo">Material: Goma</h3>
      <ul className="Lista">
        {entrenamientoHit.map(ejercicio => (
          <li key={ejercicio.nombre} className="Item-ejercicio">
            <img src={ejercicio.imagen}
              alt={ejercicio.nombre}
              className="Imagen-ejercicio" />
            <div>

              <strong className="Nombre-ejercicio">{ejercicio.nombre}</strong>
              <p className="Contenido-ejercicio"><strong>Descripción:</strong> {ejercicio.descripción}</p>
              <p className="Contenido-ejercicio"><strong>Series:</strong> {ejercicio.series}</p>
              <p className="Contenido-ejercicio"><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
              <p className="Contenido-ejercicio"><strong>Duración:</strong> {ejercicio.duracion}</p>
              <p className="Contenido-ejercicio"><strong>Descanso:</strong> {ejercicio.descanso}</p>

            </div>
          </li>
        ))}
      </ul>
      <NavLink to="/" className="link-volver">
        ← Volver al inicio
      </NavLink>
    </div>
  )

}
export default EntrenamientoHiit;

