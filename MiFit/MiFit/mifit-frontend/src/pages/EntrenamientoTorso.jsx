import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Paginamusculo.css";
import "../styles/reset.css"

export const EntrenamientoTorso = () => {
  const entrenamientoTorso = [
    { "imagen": "/pressbanca.gif", "nombre": "Press banca","descripción": "Te vas a tumbar en un banco plano con los pies firmemente apoyados en el suelo. Agarra la barra con las manos un poco más abiertos que el ancho de los hombros.Baja la barra lentamente hasta que toque el pecho, luego empuja la barra hacia arriba hasta que tus brazos estén completamente extendidos", "series": 4, "repeticiones": 12, "descanso": 1 },
    { "imagen": "/Dominadas.gif", "nombre": "Dominadas","descripción":"Agarra la barra con las manos un poco más abiertos que a la altura de los hombros yarriba hasta que tu barbilla llegue a la barra", "series": 4, "repeticiones": 9, "descanso": 1 },
    { "imagen": "/fondos.jpg", "nombre": "Fondos","descripción":"En un soporte para hacer fondos te vas a colocar y vas a subir y bajar hasta que tus brazos hagan un ángulo de 90º", "series": 3, "repeticiones": 12, "descanso": 50 },
    { "imagen": "/pressmilitar.gif", "nombre": "Press Militar","descripción": "En un banco con una inclinación del banco recto, vas a agarrar unas mancuernas y vas a empezar el movimeinto desde abajo en los hombros y sube hasta arriba de manera que tus brazos queden estirados", "series": 4, "repeticiones": 12, "descanso": 50 },
    { "imagen": "/elevaciones laterales.gif", "nombre": "Elevaciones laterales","descripción":"De pie, con una mancuerna en cada mano, eleva los brazos hacia los lados hasta la altura de los hombros, manteniendo una ligera flexión en los codos. Controla el movimiento sin balancearte y baja lentamente a la posición inicial.", "series": 4, "repeticiones": 12, "descanso": 50 }
  ];

  return (
    <div className="Entrenamiento-container">
      <h2 className="Titulo">Entrenamiento de Torso</h2>
      <h3 className="Subtitulo">Nivel: Principiante-Intermedio-Avanzado</h3>
      <ul className="Lista">
        {entrenamientoTorso.map(ejercicio => (
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
        <NavLink to="/" className="link-volver">
              ← Volver al inicio
            </NavLink>
    </div>
  );
};

export default EntrenamientoTorso;
