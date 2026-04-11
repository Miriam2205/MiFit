import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import '../styles/estilos-estructurales.css'
import '../styles/reset.css'
import '../styles/Home.css'

// Lista de entrenamientos y categorías
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

//se usa useState para manejar el estado de entrenamiento
export const EntrenamientoCard = () => {
    const navigate = useNavigate();
    

    return (
        
        <div className="EntrenamientoPagina">
            {/*Esta es la parte de arriba de la home, dónde nos da la bienvenida y tenemos un botón para añadir entrebamientos  */}

            <div className='EntrenamientoCard'>
                <div className="Bienvenida-user">
                    <img src="/running hero.jpg" alt="Hero de entrenamiento MiFit" className="Bienvenido" />
                <div className='Bienvenida-titulo'>
                    <h1 className="Bienvenida-h1">Sigue sumando, sigue sumándote</h1>
                    <p className='Bienvenida-p'>Añade un entrenamiento y explora otros entrenamientos listos para ti</p>
                        <button className="btn-anadir" onClick={() => navigate('/anadir')}>
                            Añadir Entrenamiento
                        </button>
                </div>
                </div>

                {/*Con el map recorre por la lista de Entrenamiento */}
                {listaEntrenamiento.map(lista =>
                    <Entreno key={lista._id} {...lista} navigate={navigate} />
                )}

            </div>

        </div>
    )
}

{/*Esto es una tarjeta o card con imagen para poder clickar y que nos llevará a la ruta correspondiente*/}
const Card = ({ titulo, imagen, ruta, navigate }) => (
    <div className='Categoria-card' onClick={() => navigate(ruta)} >
        <img src={imagen} alt={titulo} className='Card-imagen' />

        <h3 className="Card-titulo">{titulo}</h3>
    </div>
)
Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    ruta: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired
}
{/*representa una seccion de entrenamientos y extrae las props titulo, categorias y navigate. Y con el map recorre el array de categoria y crea una card y le pasa los datos */}
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
Entreno.propTypes = {
    titulo: PropTypes.string.isRequired,
    categorias: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            area: PropTypes.string,
            titulo: PropTypes.string.isRequired,
            imagen: PropTypes.string.isRequired,
            ruta: PropTypes.string.isRequired
        })
    ).isRequired,
    navigate: PropTypes.func.isRequired
}

