
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pagina-musculo.css";
import "../styles/reset.css"
//Array de objetos con los datos de ejercicios de fullbody y lo recorremos con un map para mostrarlo

export const EntrenamientoFullBody = () => {
    const EntrenamientoFullBody = [

        {
            "imagen": "flexiones.gif",
            "nombre": "Flexiones",
            "descripción": "Coloca las manos ligeramente más anchas que los hombros, con los dedos apuntando hacia el frente o ligeramente hacia afuera. Los pies pueden estar juntos o separados al ancho de la cadera para mayor estabilidad. El cuerpo debe formar una línea recta desde los talones hasta la cabeza, sin dejar caer la cadera ni elevarla.",
            "series": 3,
            "repeticiones": 12,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/remo.gif",
            "nombre": "Press banca inclinado",
            "descipción": "Monta una barra con algo de peso adecuado a ti y vas a coger la barra con las manos a la altura de tus hombros y vas a llevar tu barra al ombligo. Importante mantener siempre la espalda recta",
            "series": 3,
            "repeticiones": 12,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/pressmilitar.gif",
            "nombre": "Press militar con mancuernas ",
            "descripción": "En un banco con una inclinación del banco recto, vas a agarrar unas mancuernas y vas a empezar el movimeinto desde abajo en los hombros y sube hasta arriba de manera que tus brazos queden estirados",
            "series": 3,
            "duracion": 12,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/sentadillamp.gif",
            "nombre": "Sentadilla en multipower ",
            "descripción": "La sentadilla en multipower es un ejercicio realizado en una máquina con barra guiada que permite mantener una trayectoria fija durante el movimiento. Esta estabilidad facilita el control de la técnica y reduce la necesidad de equilibrio, lo que la hace útil para principiantes o para entrenar con cargas altas. Aunque limita el movimiento natural y la activación de los músculos estabilizadores, es una opción segura y eficaz para trabajar glúteos, cuádriceps e isquiotibiales.",
            "series": 3,
            "duracion": 20,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/prensa.gif",
            "nombre": "Prensa en máquina",
            "descripción": "En la máquina de prensa te vas a tumbar (puedes adecuar el respaldo según tus necesidades) y coloca tus pies en la plataforma a la altura de tus hombros. Una vez estés colocada y preparado/a quita los seguros que tendrá la máquina y baja las piernas y vuelve a subir",
            "series": 3,
            "duracion": 20,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/curlfemoraltumbado.gif",
            "nombre": "Curl femoral",
            "descripción": "En la maquina de curl femoral tumbado, te vas a colocar boca abajo en la máquina con los tobillos debajo del rodillo acolchado. Agarra los agarres laterales para mantener la estabilidad. Flexiona las rodillas para levantar el rodillo hacia los glúteos, y baja lentamente a la posición inicial",
            "series": 3,
            "duracion": 20,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/planchadesplazamiento.gif",
            "nombre": "Plancha con desplazamiento ",
            "descripción": "Te vas a colocar en forma de plancha normal y vas a llevar tu torso atras y tus piernas se van a poner en forma de V",
            "series": 3,
            "duracion": 20,
            "descanso": "1 minuto y 30 segundos"
        },



    ]
    return (
        <div className="Entrenamiento-container">
            <h2 className="Titulo">Entrenamiento de FullBody</h2>
            <h3 className="Subtitulo">Nivel: Principiante</h3>
            <h3 className="Subtitulo">Material: Goma</h3>
            <ul className="Lista">
                {EntrenamientoFullBody.map(ejercicio => (
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
export default EntrenamientoFullBody;

