import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'

import "../styles/reset.css"

export const CalisteniaNivel = () =>{
    const navigate = useNavigate()
    const niveles =  [
        {titulo: "Principiante", imagen: "/calisteniaprincipiante.jpg", ruta: "/calistenia/principiante"},
        {titulo: "Intermedio/Avanzado", imagen: "/pino.jpg", ruta: "/calistenia/intermedio"}
    ]
    return(
        <div className="Entrenamiento-container">
            <h2 className="Titulo">Calistenia-Elige tu nivel</h2>
            <ul className="Categoria-ul">{niveles.map(nivel=>(
                <li key={nivel.ruta} className="Categoria-card" onClick={()=> navigate(nivel.ruta)}>
                    <div className="Card-contenedor">
                        <img src={nivel.imagen} alt={nivel.titulo} className="Card-imagen"></img>
                        <div className="Card-titulo">{nivel.titulo}</div>
                    </div>
                    
                </li>
            ))}
            </ul>
        </div>
    )
}