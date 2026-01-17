import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pagina-musculo.css";
import "../styles/reset.css"

//Array de objetos con los datos de ejercicios de espalda y lo recorremos con un map para mostrarlo
export const EntrenamientoEspalda = () => {
  const entrenamientoEspalda = [
    {
      "imagen": "/Dominadas.gif",
      "nombre": "Dominadas en barra libre",
      "descripción":"Agarra la barra con las manos un poco más abiertos que a la altura de los hombros yarriba hasta que tu barbilla llegue a la barra",
      "series": 3,
      "repeticiones": 10,
      "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/remo.gif",
      "nombre": "Remo con barra",
      "descripción": "Monta una barra con algo de peso adecuado a ti y vas a coger la barra con las manos a la altura de tus hombros y vas a llevar tu barra al ombligo. Importante mantener siempre la espalda recta",
      "series": 4,
      "repeticiones": 12,
      "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "espalda2.gif",
      "nombre": "Jalón al pecho",
      "descripción": "En la máquina de poleas para hacer jalones, te vas a sentar y vas a agarrar el agarre ancho. Vas a tirar de la barra hasta el pecho y luego la vas a volver a subir de ,anera controlada",
      "series": 3,
      "repeticiones": 12,
      "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "remogironda.gif",
      "nombre": "Remo Gironda",
      "descripción":"En la máquina de remo en las poleas, vas a agarrar un agarre estrecho y vas a tirar de el hasta tu abdomen mientras mantienes la espalda recta",
      "series": 3,
      "repeticiones": 10,
      "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/remomaquina.gif",
      "nombre": "Remo en máquina",
      "descripción": "En la máquina de remo de discos, vas a agarrar el agarre y vas a tirar de el hasta tu abdomen mientras mantienes la espalda recta",
      "series": 3,
      "repeticiones": 12,
      "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/bicepsmaquina.gif",
      "nombre": "Biceps en máquina",
      "descripción": "En la máquina de biceps, vas a agarrar el agarre y vas a hacer el curl de biceps manteniendo tus brazos pegados al soporte",
      "series": 3,
      "repeticiones": 12,
      "descanso": "1 minuto y 30 segundos"
    }
  ]
  return (
    <div className="Entrenamiento-container">
      <h2 className="Titulo">Entrenamiento de Espalda</h2>
      <h3 className="Subtitulo">Nivel: Principiante</h3>
      <h3 className="Subtitulo">Material: Goma</h3>
      <ul className="Lista">
        {entrenamientoEspalda.map(ejercicio => (
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
  )

}
export default EntrenamientoEspalda;

