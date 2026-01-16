// componentes/NavBar.jsx
import '../styles/Estilosestructurales.css'
import '../styles/reset.css'
import '../styles/Home.css'
import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom"
import { MdAccountCircle } from 'react-icons/md'

// Usa la URL de la API desde las variables de entorno de Vite
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const Menu = () => {
    const [mostrar, setMostrar] = useState(false)
    const [entrenamientos, setEntrenamientos] = useState([])
    const [seleccionadoId, setSeleccionadoId] = useState(null)
    const navigate = useNavigate()

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

    const handleSelect = (e) => {
        const value = e.target.value
        if (!value) return

        if (value.startsWith('/entrenamiento/')) {
            const id = value.split('/').pop()
            setSeleccionadoId(id)
        } else {
            setSeleccionadoId(null)
        }

        navigate(value)
        setMostrar(false)
    }

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

    // Cargar entrenamientos desde la API
    const cargarEntrenamientos = async () => {
        try {
            const res = await fetch(`${API_URL}/entrenamiento`)
            const data = await res.json()
            // algunos endpoints pueden devolver el array directo o dentro de data
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

                    {/* Menú Entrenamientos con submenú */}
                    <li className="submenu-container">
                        <div className="entrenamiento-select-wrapper">
                            <select className="entrenamiento-select" onChange={handleSelect} defaultValue="">
                                <option value="" disabled>Entrenamientos</option>
                                <option value="/entrenamientos">Ver todos</option>
                                <optgroup label="Rutas rápidas">
                                    {rutasRapidas.map((ruta) => (
                                        <option key={ruta.path} value={ruta.path}>{ruta.label}</option>
                                    ))}
                                </optgroup>
                                <optgroup label="Mis entrenamientos">
                                    {entrenamientos.slice(0, 20).map(ent => (
                                        <option key={ent._id} value={`/entrenamiento/${ent._id}`}>
                                            {ent.titulo}
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                            <span className="entrenamiento-chevron">▾</span>
                            <button
                                type="button"
                                className="entrenamiento-delete"
                                onClick={handleDelete}
                                disabled={!seleccionadoId}
                            >
                                Borrar
                            </button>
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
