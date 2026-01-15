import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import '../styles/Ejercicioscss.css'
import "../styles/reset.css"

export const CalisteniaIntermedio = () => {
 
  const entrenamientoCalistenia = [
    {
      dia: "Día 1: Empuje",
      ejercicios: [
        { "imagen": "/pinolibre.gif", "nombre": "Handstand practice", "descripción": "Practica el pino contra la pared o libre si tienes el nivel suficiente", "series": 3, "repeticiones": "todo lo que puedas", "descanso": "1 minuto y 30segundos" },
        {
          "imagen": "/flexionesdeclinadas.gif", "nombre": "Flexiones declinadas", "descripción": "Coloca tus pies en una superficie elevada y las palmas en el suelo, mantén el cuerpo recto y baja hasta que tu pecho casi toque el suelo", "series": 3, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        },
        {
          "imagen": "/fondos.gif", "nombre": "Fondos en paralelas", "descripción": "Haz fondos en paralelas, si es demasiado para ti puedes hacerlas con una goma", "series": 3, "repeticiones": 13, "descanso": "1 minuto 30 segundos"
        },
        {
          "imagen": "/flexionespike.gif", "nombre": "Flexiones Pike", "descripción": "Coloca tus manos en el suelo formando una especie de V invertida con tu cuerpo y baja hasta que tu cabeza casi toque el suelo", "series": 3, "repeticiones": 12, "descanso": "1 minuto 30 segundos"
        },
        {
          "imagen": "/fondobanco.gif", "nombre": "Fondos en banco ", "descripción": "Coloca tus manos en un banco detrás de ti y tus pies en el suelo delante de ti, baja hasta que tus brazos formen un ángulo de 90 grados y sube", "series": 2, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        },
      ]
    },
    {
      dia: "Día 2: Pull",
      ejercicios: [
        {
          "imagen": "/Dominadas.gif", "nombre": "Dominadas", "descripción": "Agarra la barra con las manos un poco más abiertos que a la altura de los hombros yarriba hasta que tu barbilla llegue a la barra", "series": 3, "repeticiones": 13, "descanso": "2 minutos"
        },
        {
          "imagen": "/flexiones.gif", "nombre": "Explosive pull ups", "descripción": "Haz dominadas lo más exposivas que puedas, es decir rápidas y subiendo bien arriba", "series": 3, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        },
        {
          "imagen": "/australian.gif", "nombre": "Australian pull ups", "descripción": "Colócate debajo de una barra baja con el cuerpo recto y los talones apoyados en el suelo, agarra la barra con las manos a la altura de los hombros y las palmas mirando hacía ti, sube hasta que tu pecho toque la barra", "series": 3, "repeticiones": 12, "descanso": "1 min 30 segundos"
        },
        {
          "imagen": "/dominadaspronas.gif", "nombre": "Dominadas pronas", "descripción": "Esta variante de dominas es con las palmas mirando hacia delante y el agarre es a la altura de los hombros", "series": 2, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        }
      ],
    },
    {
      dia: "Día 3: Piernas + Core",
      ejercicios: [
        {
          "imagen": "/pistolsquat.gif", "nombre": "Pistol squat", "descripción": "Es un ejercicio avanzado y se trata de una sentadilla a una pierna, si no puedes hacerlo puedes ayudarte para bajar y sentarte en una silla o ayudandote con la mano apoyada en algo y bajar hasta abajo", "series": 3, "repeticiones": 10, "descanso": "1 minuto 30 segundos"
        },
        {
          "imagen": "/sentadillasalto.gif", "nombre": "Sentadilla con salto", "descripción": "Sentadilla normales pero al subir haz un salto y haz todas las repeticiones rápidas", "series": 4, "repeticiones": 20, "descanso": "1 minuto 30 segundos"
        },
        {
          "imagen": "/sentadillabulgara.gif", "nombre": "Sentadilla búlgara", "descripción": "Coloca un pie detrás de ti en un banco elevado formando un ángulo de 90 grados con la pierna y baja con la otra pierna hasta abajo. Una vez que lo hagas con una pierna hazlo con la otra", "series": 4, "repeticiones": 20, "descanso": "1 minuto"
        },
        {
          "imagen": "/elevacionespantorrillas.gif", "nombre": " Elevaciones de pantorrillas", "descripción": "Colocate en el borde en un escalón con los talones fuera del escalón y sube y baja con las puntas de los pies", "series": 3, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        },
        {
          "imagen": "/curlnordico.gif", "nombre": " Curl nórdico", "descripción": "Colocate con las rodillas en el suelo y asegura tus pies con algo que pesa para que no se mueva, ahora baja el torso despacio hasta que no puedas mas y cae del todo", "series": 2, "repeticiones": 15, "descanso": "1 minuto 30 segundos"
        }

      ]
    },
    {
      dia: "Día 4: Push + Skill Day",
      ejercicios: [
        {
          "imagen": "/pinolibre.gif", "nombre": "Pino libre contra la pared o libre", "descripción": "Haz pino libre si tienes el sufieciente nivel sino haz pino en contra de la pared, para progresar puedes separar poco a poco tus pies de la pared", "series": 2, "repeticiones": "todo lo que puedas", "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/fondos.gif", "nombre": "Fondos ", "descripción": "Haz fondos en paraleas, si es demasiado para ti puedes hacerlas con una goma", "series": 3, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/planchalean.png", "nombre": "Plancha lean", "descripción": "Colócate en posición de plancha con las palmas de las manos mirando hacia los lados y tu tronco adelantado a tus palmas", "series": 2, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/rana.jpeg", "nombre": "La rana ", "descripción": "Colócate en posición de cuclillas con las manos en el suelo y  suelta tus pies para que solo toque el suelo tus manos, vete intercalando en poner y quitar los pies del suelo", "series": 3, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/flexionesdiamante.gif", "nombre": "Flexiones diamante ", "descripción": "Haz flexiones con las manos formando un diamente debajo de tu pecho", "series": 3, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
        },
        {
          "imagen": "/flexionespike.gif", "nombre": " Flexiones pike con cajón", "descripción": "Coloca tus pies en un cajón o superficie elevada y coloca tus palmas en el suelo y manten tu tronco recto mientras bajas hasta que tu cabeza casi toque el suelo", "series": 3, "repeticiones": 15, "descanso": "1 minuto y 30 segundos"
        }
      ]
    }
  ];

   const [diaActivo, setDiaActivo] = useState(null);
  const toggle = (index) => {
    setDiaActivo(diaActivo === index ? null : index);
  }

  return (
    <div className="Entrenamiento-container">
      <h2 className="Titulo">Entrenamiento de Calistenia Intermedio-Avanzado</h2>

      <div className="Acordeon-container">

        {entrenamientoCalistenia.map((dia, index) => (

          <div className="Acordeon-item">

            <div className="Acordeon-header" onClick={() => toggle(index)}>
              <h3>{dia.dia}</h3>
              <span className="Acordeon-icon">{diaActivo === index ? "-" : "+"}</span>
            </div>

            {diaActivo === index && (
              <div className="Acordeon-content">
                {dia.ejercicios.map((ejercicios) => (

                  <div  className="Ejercicio-item">
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
export default CalisteniaIntermedio;

