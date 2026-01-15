import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Paginamusculo.css";
export const EntrenamientoPierna = () => {
  const entrenamientoPierna = [
    {
      "imagen": "/sentadilla.gif","nombre": "Sentadilla con barra","descripción": "Colócate bajo tus espaldas una barra con peso adecuado a ti. Mantén tu espalda recta en todo momento y baja hasta por lo menos conseguir un ángulo de 90º con las piernas", "series": 3,"repeticiones": 12,"descanso": "2 minutos"
    },
    {
      "imagen": "/pesomuerto.jpg","nombre": "Peso muerto","descripción":"Coge la barra a la altura de tus hombros y con un peso adecuado a ti.Baja y sube lentamemnte con la barra pegada a las piernas y mantén en todo momento tu espalda recta", "series": 4,"repeticiones": 12,"descanso": "2 minutos"
    },
    {
      "imagen": "extensioncuadriceps.gif","nombre": "Extensión de cuadriceps","descripcion": "En la máquina de extensión de cuádriceps te vas a sentar y colocar tus piernas detrás del rodillo amoldado para eso y sube las piernas hasta arriba", "series": 3,"repeticiones": 12,"descanso": "2 minutos"
    },
    {
      "imagen": "/prensa.gif","nombre": "Prensa de pierna","descripción": "En la máquina de prensa te vas a tumbar (puedes adecuar el respaldo según tus necesidades) y coloca tus pies en la plataforma a la altura de tus hombros. Una vez estés colocada y preparado/a quita los seguros que tendrá la máquina y baja las piernas y vuelve a subir ", "series": 3,"repeticiones": 10,"descanso": "2 minutos"
    },
    {
      "imagen": "/curlfemoral.gif","nombre": "Curl femoral","descripción": "Esta máquina es un curl femoral de pie (si no la tienes puedes acudir a la tumbada). En esta máquina vas a apoyar tus antebrazos y vas poner tus pies en los rulos. Una vez estés colocado, sin mover tu pierna vas a hacer un curl con la pierna en la que estés trabajando", "series": 3,"repeticiones": 12,"descanso": "2 minutos"
    },
  ]
  return (
    <div className="Entrenamiento-container">
          <h2 className="Titulo">Entrenamiento de Tren Inferior</h2>
          <h3 className="Subtitulo">Nivel: Principiante-Intermedio-Avanzado</h3>
    
          <ul className="Lista">
            {entrenamientoPierna.map((ejercicio) => (
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
export default EntrenamientoPierna;

