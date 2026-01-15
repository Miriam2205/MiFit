import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Sidebar.css'


export const Sidebar = () => {
    return(
        <aside className="Sidebar">        
                <nav className='Sidebar-nav'>
                    <ul className='Sidebar-ul'>
                        <li className='Sidebar-li'><Link to="/"><span className="material-symbols-outlined Sidebar-icon">home</span>Inicio</Link></li>
                        <li className='Sidebar-li'><Link to="/entrenamiento"><span className="material-symbols-outlined Sidebar-icon">fitness_center</span>
              Entrenamiento</Link> </li>
                        <li className='Sidebar-li'><Link to="/retos"><span className="material-symbols-outlined Sidebar-icon">flag</span>
              Retos</Link> </li>
                        <li className='Sidebar-li'><Link to="/perfil"><span className="material-symbols-outlined Sidebar-icon">person</span>
              Perfil</Link> </li>
                    </ul>
                </nav>
            </aside>

    )
}
