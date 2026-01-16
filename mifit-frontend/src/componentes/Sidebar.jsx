import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Sidebar.css'
import { MdHome, MdFitnessCenter, MdPerson } from 'react-icons/md';


export const Sidebar = () => {
    return(
        <aside className="Sidebar">        
                <nav className='Sidebar-nav'>
                    <ul className='Sidebar-ul'>
                        <li className='Sidebar-li'><Link to="/"><MdHome className="Sidebar-icon" />Inicio</Link></li>
                        <li className='Sidebar-li'><Link to="/anadir"><MdFitnessCenter className="Sidebar-icon" />
              Añadir entrenamiento</Link> </li>
                        <li className='Sidebar-li'><Link to="/perfil"><MdPerson className="Sidebar-icon" />
              Perfil</Link> </li>
                    </ul>
                </nav>
            </aside>

    )
}
