import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pagina-musculo.css";
import "../styles/reset.css"


export const EntrenamientoDominada = () => {
  const entrenamientoDominada = [
    {
      "imagen": "/retraccionescapular.gif", "nombre": "Retraccion escapular", "descripción": "Cuélgate de la barra y haz como un amago de dominada pero solo vas a activar los dorsales al subir y bajar", "series": 1, "repeticiones": 20, "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/rotacion de hombro.jpg", "nombre": "Rotacion de hombro", "descripción": "Coge una mancuerna que te resulte ligera de peso y pon tu brazo a un ángulo de 90º y haz rotaciones hacia afuera y hacia dentro", "series": 1, "repeticiones": 20, "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/Dominada negativa.png", "nombre": "Dominadas negativas", "descripción": "Las dominadas negativas se trata de con ayuda de un banco empezar ya desde arriba y baja lentamente hasta abajo", "series": 3, "repeticiones": 8, "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/dominadagoma.jpg", "nombre": "Dominadas con goma", "descripción": "Coloca una goma y agarrala en la barra arriba(haz un nudo impidiendo que se caiga), pon tus dos pies o uno en la goma y agarra tus manos a la barra y sube hasta arriba", "series": 3, "repeticiones": 12, "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "/remo.gif", "nombre": "Remo con barra", "descripción": "Monta una barra con algo de peso adecuado a ti y vas a coger la barra con las manos a la altura de tus hombros y vas a llevar tu barra al ombligo. Importante mantener siempre la espalda recta", "series": 2, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
    },
    {
      "imagen": "estiramientoespalda.png", "nombre": "Estiramiento de espalda", "descripción": "tumbate en el suelo con la estirilla y vas a estirar tus brazos intentando llevarlo lo más lejos posible", "series": 3, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
    }
  ]
  return (
    <div className="Entrenamiento-container">
      <h2 className="Titulo">Entrenamiento para Conseguir la primera dominada</h2>
      <h3 className="Subtitulo">Nivel: Principiante</h3>
      <h3 className="Subtitulo">Material: Goma</h3>
      <ul className="Lista">
        {entrenamientoDominada.map(ejercicio => (
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
export default EntrenamientoDominada;

