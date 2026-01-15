import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '../componentes/Sidebar'
import { Footer } from '../componentes/Footer'
import {AnadirEntrenamiento} from  '../componentes/AnadirEntrenamiento'
import '../styles/Estilosestructurales.css'
import '../styles/reset.css'
import '../styles/Home.css'
import '../styles/Header.css'


const listaEntrenamiento = [
    {
        _id: 0, titulo: "Entrenamiento por enfoque estético/grupo muscular", categorias: [
            { _id: 0, area: "Entrenamiento", titulo: "Abdominales", imagen: "/Abdominales.png", ruta: "/abdominales" },
            { _id: 1, area: "Entrenamiento", titulo: "Tren Inferior", imagen: "/sentadilla.png", ruta: "/pierna" },
            { _id: 2, area: "Entrenamiento", titulo: "Pecho, hombro y triceps", imagen: "/hombro.jpg", ruta: "/pecho" },
            { _id: 3, area: "Entrenamiento", titulo: "Tren Superior", imagen: "/torso.png", ruta: "/torso" },
            { _id: 4, area: "Entrenamiento", titulo: "Espalda", imagen: "/espalda.jpg", ruta: "/espalda" },
            { _id: 5, area: "Entrenamiento", titulo: "Gluteo", imagen: "/gluteo.jpg", ruta: "/gluteo" }
        ]
    },
    {
        _id: 1, titulo: "Niveles", categorias: [
            { _id: 0, area: "Entrenamiento", titulo: "Principiante", imagen: "/Nivelprincipiante.png", ruta: "/principiante" },
            { _id: 1, area: "Entrenamiento", titulo: "Intermedio", imagen: "/Nivelintermedio.png", ruta: "/intermedio" },
            { _id: 2, area: "Entrenamiento", titulo: "Avanzado", imagen: "/Nivelavanzado.png", ruta: "/avanzado" },
        ]
    },
    {
        _id: 2, titulo: "Entrenamientos por tipo de cuerpo/ objetivo o retos", categorias: [
            { _id: 1, area: "Entrenamiento", titulo: "FullBody", imagen: "/flexionfullbody.jpg", ruta: "/fullbody" },
            { _id: 2, area: "Entrenamiento", titulo: "Calistenia", imagen: "/pino.jpg", ruta: "/calistenia/nivel" },
            { _id: 3, area: "Entrenamiento", titulo: "Dominada", imagen: "/dominadareto.jpg", ruta: "/dominada" },
            { _id: 4, area: "Entrenamiento", titulo: "HIIT", imagen: "/hiit.jpg", ruta: "/hiit" }
        ]
    }
];


export const EntrenamientoCard = () => {
    const [entrenamientoAnadido, setEntrenamientoAnadido] = useState(false)
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const navigate = useNavigate();
    

    return (
        
        <div className="EntrenamientoPagina">


            <div className='EntrenamientoCard'>
                <div className="Bienvenida-user">
                    <img src="/bienvenida.png" alt="Bienvenido/a usuario/a" className="Bienvenido" />

                    <div className="Bienvenida-card">
                        <h2 className='Bienvenida-h2'>Bienvenido/a a MiFit</h2>
                        <p className='Bienvenida-texto'>Explora y añade tus entrenamientos favoritos</p>

                        {!entrenamientoAnadido ? (
                            <button onClick={() => navigate('/anadir')}>Añadir entrenamiento</button>

                        ) : (
                            <p>Entrenamiento añadido: <strong>{entrenamientoAnadido}</strong></p>
                        )}
                    </div>

                    {listaEntrenamiento.map(lista =>
                        <Entreno key={lista._id} {...lista} navigate={navigate} />
                    )}
                </div>

            </div>
            {mostrarFormulario && (
                <AnadirEntrenamiento
                    onClose={() => setMostrarFormulario(false)}
                />
            )}

        </div>
    )
}


const Card = ({ titulo, imagen, ruta, navigate }) => (
    <div className='Categoria-card' onClick={() => navigate(ruta)} style={{ cursor: 'pointer' }}>
        <img src={imagen} alt={titulo} className='Card-imagen' />

        <h3 className="Card-titulo">{titulo}</h3>
    </div>
)
const Entreno = (props) => {
    const { titulo, categorias, navigate } = props
    return (
        <section className='Categoria-entreno'>
            <div className='Categoria-nombre'>
                <h2 className='Categoria-titulo'>
                    {titulo}
                </h2>
            </div>
            <ul className='Categoria-ul'>
                {categorias.map(categoria =>
                    <Card key={`${titulo}-${categoria._id}`} {...categoria} navigate={navigate} />
                )}
            </ul>
        </section>
    )
}

