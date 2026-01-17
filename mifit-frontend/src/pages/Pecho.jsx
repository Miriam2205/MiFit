
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pagina-musculo.css";

//Array de objetos con los datos de ejercicios de pecho, hombro y triceps y lo recorremos con un map para mostrarlo
export const EntrenamientoPechoHombroTriceps = () => {
    const EntrenamientoPechoHombroTriceps = [

        {
            "imagen": "/pressbanca.gif",
            "nombre": "Press banca",
            "descripción": "Te vas a tumbar en un banco plano con los pies firmemente apoyados en el suelo. Agarra la barra con las manos un poco más abiertos que el ancho de los hombros.Baja la barra lentamente hasta que toque el pecho, luego empuja la barra hacia arriba hasta que tus brazos estén completamente extendidos",
            "series": 3,
            "repeticiones": 12,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/pressinclinado.gif",
            "nombre": "Press banca inclinado",
            "descripción": "Ajusta un banco a una inclinación de 30 a 45 grados(ni muy recto ni totalmente plano).Acuéstate en el banco con los pies firmemente apoyados en el suelo.Agarra la barra con las manos un poco más abiertos que el ancho de los hombros. Baja la barra lentamente hasta que toque la parte superior del pecho, luego  empuja la barra hacia arriba hasta que tus brazos estén completamente extentidos",
            "series": 3,
            "repeticiones": 12,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/pajaros.gif",
            "nombre": "Pajaros con mancuernas",
            "descripción": "Colocate en un banco y mantén tu cabeza hacia el suelo y con unas mancuernas en cada mano, con los brazos extendidos hacia abajo. Mueve tus bazos hacia los lados hasta hasta arriba como ves en el gif",
            "series": 3,
            "duracion": 12,
            "descanso": "1 minuto y 30 segundos"
        },
        {
            "imagen": "/extensiontriceps.gif",
            "nombre": "Extension de triceps",
            "descripción":"En una polea alta con un agarre de cuerta, vas a tirar de la cuerda hacia abajo hasta que tus brazos estén completamente extendidos y tus manos estén a los lados de tus muslos. Luego, regresa lentamente a la posición inicial",
            "series": 3,
            "duracion": 20,
            "descanso": "1 minuto y 30 segundos"
        }

    ]
    return (
         <div className="Entrenamiento-container">
                  <h2 className="Titulo">Entrenamiento de Tren Inferior</h2>
                  <h3 className="Subtitulo">Nivel: Medio</h3>
            
                  <ul className="Lista">
                    {EntrenamientoPechoHombroTriceps.map((ejercicio) => (
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
export default EntrenamientoPechoHombroTriceps;

