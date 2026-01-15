import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Footer.css'


export const Footer = () => {
    return(
        <footer className="Footer">
            <p>© 2025 MiFit. Todos los derechos reservados.</p>
            <ul className='Footer-links'>
                <li><a href="/nosotros ">Sobre nosotros</a></li>
                <li><a href="/contacto">Contacto</a></li>
                <li><a href="/privacidad">Política privacidad</a></li>
            </ul>
               
        </footer>

    )
}
