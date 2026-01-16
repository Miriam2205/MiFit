// componentes/NavBar.jsx
import '../styles/Estilosestructurales.css'
import '../styles/reset.css'
import '../styles/Home.css'
import React, { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom"
import { MdAccountCircle } from 'react-icons/md'

export const Menu = () => {
    const [mostrar, setMostrar] = useState(false)
    const [entrenamientos, setEntrenamientos] = useState([])

    const toggleMenu = () => setMostrar(prev => !prev)

    // Cargar entrenamientos desde la API
    const cargarEntrenamientos = async () => {
        try {
            const res = await fetch("http://localhost:3000/entrenamiento")
            const data = await res.json()
            setEntrenamientos(data.data)
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
                        <span className="submenu-title">Entrenamientos ▾</span>

                        <ul className="submenu">
                            <li><NavLink to="/entrenamientos">Ver todos</NavLink></li>

                            {entrenamientos.slice(0, 5).map(ent => (
                                <li key={ent._id}>
                                    <NavLink to={`/entrenamiento/${ent._id}`}>
                                        {ent.titulo}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li><NavLink to="/consejos">Consejos</NavLink></li>
                    <li><NavLink to="/comunidad">Comunidad</NavLink></li>

                    <li>
                        <NavLink to="/usuario" className="usuario-link">
                            <MdAccountCircle style={{ fontSize: '30px', marginRight: '6px' }} />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
