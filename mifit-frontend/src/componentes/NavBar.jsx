// componentes/NavBar.jsx
import '../styles/estilos-estructurales.css'
import '../styles/reset.css'
import '../styles/Home.css'
import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom"
import { MdAccountCircle } from 'react-icons/md'

// Usa la URL de la API desde las variables de entorno de Vite
const API_URL = import.meta.env.VITE_API_URL 

export const Menu = () => {
    //Estado para manejar el menu de la hamburguesa 
    const [mostrar, setMostrar] = useState(false)
    //Usamos el estado para manejar los entrenamientos y entrenamientos seleccionados
    const [entrenamientos, setEntrenamientos] = useState([])
    const [seleccionadoId, setSeleccionadoId] = useState(null)
    const navigate = useNavigate()

    //Rutas principales comunes de los entrenamientos
    const rutasRapidas = [
        { path: '/abdominales', label: 'Abdominales' },
        { path: '/pierna', label: 'Pierna' },
        { path: '/pecho', label: 'Pecho, hombro y tríceps' },
        { path: '/torso', label: 'Torso' },
        { path: '/espalda', label: 'Espalda' },
        { path: '/gluteo', label: 'Glúteo' },
        { path: '/principiante', label: 'Principiante' },
        { path: '/intermedio', label: 'Intermedio' },
        { path: '/avanzado', label: 'Avanzado' },
        { path: '/fullbody', label: 'Fullbody' },
        { path: '/calistenia/nivel', label: 'Calistenia' },
        { path: '/dominada', label: 'Dominada' },
        { path: '/hiit', label: 'HIIT' }
    ]

    const toggleMenu = () => setMostrar(prev => !prev)

    //Esta función se ejecuta cuando el usuario selecciona un entrenameinto, navega a la ruta elegida y cierra el menu
    const handleSelect = (e) => {
        const value = e.target.value
        if (!value) return

        setSeleccionadoId(value.startsWith('/entrenamiento/') ? value.split('/').pop() : null)
        navigate(value)
        setMostrar(false)
    }

    //Esta función es para cuando el usuario quiere borrar un entrenamiento. Primero pide confirmación y luego hace una petición DELETE a la API, si no hay errores se borra de la lista y si no salta un mensaje de error de misión fallida
    const handleDelete = async () => {
        if (!seleccionadoId) return
        const confirmDelete = window.confirm('¿Borrar este entrenamiento?')
        if (!confirmDelete) return

        try {
            const res = await fetch(`${API_URL}/entrenamiento/${seleccionadoId}`, { method: 'DELETE' })
            if (!res.ok) throw new Error('Error al borrar')

            setEntrenamientos(prev => prev.filter(ent => ent._id !== seleccionadoId))
            setSeleccionadoId(null)
        } catch (error) {
            console.log('Error borrando entrenamiento:', error)
        }
    }

    // Cargar entrenamientos desde la API, por eso vemos una petición de fetch a la API para obetner todos los entrenamientos. Esos datos los convierte en json y guarda los entrenamientos en el estado
    const cargarEntrenamientos = async () => {
        try {
            const res = await fetch(`${API_URL}/entrenamiento`)
            const data = await res.json()
            
            const lista = Array.isArray(data) ? data : data?.data || []
            setEntrenamientos(lista)
        } catch (error) {
            console.log("Error cargando entrenamientos:", error)
        }
    }

    useEffect(() => {
        cargarEntrenamientos()
    }, [])

    return (
        <header className='Header'>
            <nav className='Navbar'>
                <Link to="/">
                    <img src="/logomifit.png" alt="logoMifit" className='logoMifit' />
                </Link>

                {/*Botón que se muestra cuando la pantalla es pequeña y muestra el menú hamburguesa*/}
                <button
                    className={`hamburguesa ${mostrar ? 'is-active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </button>

                <ul className={`menu-list ${mostrar ? 'open' : ''}`}>

                    <li><NavLink to="/">Inicio</NavLink></li>

                    {/* Menú desplegable de Entrenamientos.  */}
                    <li className="submenu-container">
                        <div className="entrenamiento-select-wrapper">
                            {/* Cada vez que se seleccione una opción se ejecutará handleSelect e irá a la ruta elegida*/}
                            <select className="entrenamiento-select" onChange={handleSelect} defaultValue="">
                                <option value="" disabled>Entrenamientos</option>
                                <option value="/entrenamientos">Ver todos</option>
                                {/* Array de rutas rapida que mostramos con un map, son las páginas comunes de los entrenamientos */}
                                <optgroup label="Rutas rápidas">
                                    {rutasRapidas.map((ruta) => (
                                        <option key={ruta.path} value={ruta.path}>{ruta.label}</option>
                                    ))}
                                </optgroup>
                                {/* Aparte de las rutas rápidas tenemos acceso a los entrenamientos que nosotros mismos hemos creado previamente en añadirEntrenamiento */}
                                <optgroup label="Mis entrenamientos">
                                    {entrenamientos.slice(0, 20).map(ent => (
                                        <option key={ent._id} value={`/entrenamiento/${ent._id}`}>
                                            {ent.titulo}
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                            <span className="entrenamiento-chevron">▾</span>
                            <button type="button" className="entrenamiento-delete" onClick={handleDelete} disabled={!seleccionadoId}
                            >Borrar</button>
                        </div>
                    </li>

                    <li><NavLink to="/consejos">Consejos</NavLink></li>
                    <li><NavLink to="/comunidad">Comunidad</NavLink></li>

                    <li>
                        <NavLink to="/perfil" className="usuario-link">
                            <MdAccountCircle style={{ fontSize: '30px', marginRight: '6px' }} />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
