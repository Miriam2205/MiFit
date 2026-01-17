import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import '../styles/ejercicios.css'
//Array del entrenamiento de calistenia principiante. En este diseño de página he adoptado otro diseño con un planning de tres días a través de un acordeón para que el usuario pueda ver los ejercicios de cada día al desplegarlo
export const CalisteniaPrincipiante = () => {
  const calisteniaPrincipiante = [
    {
      dia: "Dia 1: Pull + Core",
      ejercicios: [
        {
          "imagen": "/retraccionescapular.gif", "nombre": "Retraccion escapular", "descripción": "Cuélgate de la barra y haz como un amago de dominada pero solo vas a activar los dorsales al subir y bajar", "series": 4, "repeticiones": 12, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/dominadaspronas.gif", "nombre": "Dominadas pronas", "descripción": "cuelgate de la barra con las palmas mirandi hacía a ti y sube hasta que te llegue la barbilla arriba", "series": 1, "repeticiones": 20, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/Dominadas.gif", "nombre": "Dominadas negativas", "descripción": "Las dominadas negativas se trata de con ayuda de un banco empezar ya desde arriba y baja lentamente hasta abajo", "series": 3, "repeticiones": 8 - 10, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/australian.gif", "nombre": "Australian pull ups", "descripción": "Hay que colocarse debajo de una barra fija en posición horizontal y tirar del cuerpo hacia arriba", "series": 3, "repeticiones": 12, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/curlnordico.gif", "nombre": " Curl nórdico", "descripción": "Colocate con las rodillas en el suelo y asegura tus pies con algo que pesa para que no se mueva, ahora baja el torso despacio hasta que no puedas mas y cae del todo", "series": 2, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        }

      ]
    },
    {
      dia: "Día 2: Piernas +Core",
      ejercicios: [
        {
          "imagen": "/sentadilladesplazado.gif", "nombre": "Sentadilla desplazada ", "series": 2, "repeticiones": 15, "descanso": 2
        },

        {
          "imagen": "/sentadillasalto.gif", "nombre": "Sentadilla salto ", "descripción": "Sentadilla normales pero al subir haz un salto y haz todas las repeticiones rápidas", "series": 3, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/elevacionespantorrillas.gif", "nombre": " Elevaciones de pantorrillas", "descripción": "Colocate en el borde en un escalón con los talones fuera del escalón y sube y baja con las puntas de los pies", "series": 3, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        },
        {
          "imagen": "/sentadillabulgara.gif", "nombre": "Sentadilla búlgara", "descripción": "Coloca un pie detrás de ti en un banco elevado formando un ángulo de 90 grados con la pierna y baja con la otra pierna hasta abajo. Una vez que lo hagas con una pierna hazlo con la otra", "series": 4, "repeticiones": 20, "descanso": "1 minuto"
        },
        {
          "imagen": "/planchadesplazamiento.gif", "nombre": "Plancha con desplazamiento", "descripción": "Te vas a colocar en forma de plancha normal y vas a llevar tu torso atras y tus piernas se van a poner en forma de V", "series": 3, "duracion": 20, "descanso": "1 minuto y 30 segundos",
        },
        {
          "imagen": "/plancha.jpeg", "nombre": "Plancha", "descripción": "Apoya los antebrazos sobre el suelo mientras mantienes la espalda totalmente recta e intentando mantener el core estable.", "duracion": 20, "descanso": "1 minuto y 30 segundos",
        },
      ]
    },
    {
      dia: "Día 3: Push ",
      ejercicios: [
        {
          "imagen": "/fondobanco.gif", "nombre": "Fondos en banco ","descripción": "Coloca tus manos en un banco detrás de ti y tus pies en el suelo delante de ti, baja hasta que tus brazos formen un ángulo de 90 grados y sube", "series": 2, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        },
        { 
          "imagen": "/flexiones.gif","nombre": "Flexiones","descripción": "Coloca las manos ligeramente más anchas que los hombros, con los dedos apuntando hacia el frente o ligeramente hacia afuera. Los pies pueden estar juntos o separados al ancho de la cadera para mayor estabilidad. El cuerpo debe formar una línea recta desde los talones hasta la cabeza, sin dejar caer la cadera ni elevarla.", "series": 3,"repeticiones": 12,"descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen":"/dominadagoma.jpg","nombre": "Dominadas con goma","descripción": "Coloca una goma y agarrala en la barra arriba(haz un nudo impidiendo que se caiga), pon tus dos pies o uno en la goma y agarra tus manos a la barra y sube hasta arriba", "series": 3,"repeticiones": 12,"descanso": "1 minuto y 30 segundos"
       },
        {
          "imagen": "/fondos.gif", "nombre": "Fondos ", "descripción": "Haz fondos con goma, cuánto mas gordita sea la goma más fácil te va a resultar. Coloca la goma en las paralelas y pon tus pies en la goma, baja hasta abajo y sube", "series": 3, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
        },
      ]
    }
  ]
    //Guarda que día está abierto y el valor null significa que ninguno está abierto.Luego tenemos el toggle que si hacemos click en un día cerrado se abre y si hacemos click en el día abierto se cierra
  const [diaActivo, setDiaActivo] = useState(null);
  const toggle = (index) => {
    setDiaActivo(diaActivo === index ? null : index);
  }
  return (
    <div className="Entrenamiento-container">
      <h2 className="Titulo">Entrenamiento de Calistenia Intermedio-Avanzado</h2>

      <div className="Acordeon-container">

{/*Con el map recorre el array calistenia Principiante y si le damos a toggle nos mostrará los ejercicios de ese día. */}
        {calisteniaPrincipiante.map((dia, index) => (

          <div className="Acordeon-item">

            <div className="Acordeon-header" onClick={() => toggle(index)}>
              <h3>{dia.dia}</h3>
              <span className="Acordeon-icon">{diaActivo === index ? "-" : "+"}</span>
            </div>

            {diaActivo === index && (
              <div className="Acordeon-content">
                {dia.ejercicios.map((ejercicios) => (

                  <div className="Ejercicio-item">
                    <img src={ejercicios.imagen} alt={ejercicios.nombre} className="Imagen-ejercicio" />
                    <div className="Info-ejercicio">
                      <strong>{ejercicios.nombre}</strong>
                      <p>Descripción:{ejercicios.descripción}</p>
                      <p>Series: {ejercicios.series}</p>
                      <p>Repeticiones: {ejercicios.repeticiones}</p>
                      <p>Descanso: {ejercicios.descanso}</p>
                    </div>
                  </div>

                ))}
              </div>
            )}

          </div>

        ))}

      </div>
      <NavLink to="/" className="link-volver">
        ← Volver al inicio
      </NavLink>
    </div>
  )

}
export default CalisteniaPrincipiante;

