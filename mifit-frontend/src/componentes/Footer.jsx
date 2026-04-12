import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Footer.css'

export const Footer = () => {
    return(
        <footer className="Footer">
            <p>© 2025 MiFit. Todos los derechos reservados.</p>
            <ul className='Footer-links'>
                <li><NavLink to="/comunidad">Comunidad</NavLink></li>
                <li><NavLink to="/consejos">Consejos</NavLink></li>
                <li><NavLink to="/perfil">Perfil</NavLink></li>
            </ul>
               
        </footer>

    )
}
