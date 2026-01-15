import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Paginamusculo.css";
import "../styles/reset.css"

export const EntrenamientoAbdominales = () => {
  const entrenamientoAbdominales = [
    {
      "imagen": "/Rotacion de columna1.jpg", "nombre": "Movilidad-Rotación de columna","descripción": "Te vas a colocar en el suelo a cuatro patas y vas a encorvar tu columna mientras coges aire y luego la volverás a poner recta", "series": 1, "repeticiones": 10, "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/rotacionhombro.jpg", "nombre": "Movilidad de hombro","descripción":"Con ayuda de una goma atala a un soporte que se te quede a la misma altura del pecho, y despues haz unas rotaciones como si quisieses pegarte la goma al torso", "series": 1, "repeticiones": 10, "descanso": "1 minuto y 30 segundos",
    },
    {
      "imagen": "crunch.jpg", "nombre": "Crunch","descripción": "Colocate una esterilla en el suelo y túmbate boca arriba y pon tus manos detrás de tu cabeza e intenta llevarte tus codos a tus rodillas. Si lo quieres hacer más dificil puedes colocarte en un banco declinado", "series": 3, "repeticiones": 15, "descanso": "1 minuto y 30 segundos",
    },
    {
      "imagen": "plancha.jpeg", "nombre": "Plancha","descripción": "Colócate en el suelo y pon tus antebrazos en el suelo y mientras mantén tu espalda recta y aprieta el core", "series": 3, "repeticiones": "30 segundos", "descanso": "1 minuto y 30 segundos",
    },
    {
      "imagen": "plancha lateral.jpeg", "nombre": "Plancha lateral","descripción": "Colócate de lado y apoya tu antebrazo en el suelo, mientras, estarás lo más recta posible. Hazlo en cada lado", "series": 3, "repeticiones": "30 segundos", "descanso": "1 minuto",
    },
    {
      "imagen": "planchadesplazamiento.gif", "nombre": "Plancha con desplazamiento", "descripción": "Te vas a colocar en forma de plancha normal y vas a llevar tu torso atras y tus piernas se van a poner en forma de V","series": 3, "repeticiones": "30 segundos", "descanso": "1 minuto",
    },
  ]

  return (
    <div className="Entrenamiento-container">
      <h2 className="Titulo">Entrenamiento de Abdominales</h2>
      <h3 className="Subtitulo">Nivel: Principiante</h3>
      <h3 className="Subtitulo">Material: Goma</h3>

      <ul className="Lista">
        {entrenamientoAbdominales.map((ejercicio) => (
          <li key={ejercicio.nombre} className="Item-ejercicio">
            <img
              src={ejercicio.imagen}

              className="Imagen-ejercicio"
            />
            <div>
              <h3 className="Nombre-ejercicio">{ejercicio.nombre}</h3>
              <p className="Contenido-ejercicio"><strong>Descripción:</strong> {ejercicio.descripción}</p>
              <p className="Contenido-ejercicio"><strong>Series:</strong> {ejercicio.series}</p>
              <p className="Contenido-ejercicio"><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
              <p className="Contenido-ejercicio"><strong>Duración:</strong> {ejercicio.duracion}</p>
              <p>Descanso: {ejercicio.descanso}</p>
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

export default EntrenamientoAbdominales;