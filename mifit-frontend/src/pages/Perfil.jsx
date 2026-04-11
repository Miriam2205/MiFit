import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import '../styles/Perfil.css'

export const Perfil = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    ///Definimos un usuario por defecto en caso de que no haya datos en el localStorage
    const defaultUser = {
        nombre: 'Usuario',
        email: 'correo@ejemplo.com',
        edad: '',
        peso: '',
        altura: '',
        objetivo: 'Añade tu objetivo'
    };
    //Estados para guardar datos del usuario y retos
    const currentUser = user || defaultUser
    const [retos] = useState([
        { id: 1, nombre: 'Hacer 100 flexiones', completado: 45, total: 100 },
        { id: 2, nombre: 'Entrenamientos semanales', completado: 3, total: 5 },
        { id: 3, nombre: 'Calorías quemadas', completado: 2500, total: 5000 }
    ]);

    //Esta función es para cerrar sesión usando el contexto global y después redirige a login
    const handleLogout = () => {
        logout()
        navigate('/login')
    };

    return (
        <div className="perfil-container">
            <div className="perfil-header">
                <h1>¡Hola, {currentUser.nombre }!</h1>
                <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
            </div>

            <div className="perfil-info">
                <div className="info-card">
                    <h3>Información Personal</h3>
                    {/*Primer gran div para la información de registro que habíamos dado */}
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="label">Email:</span>
                            <span className="value">{currentUser.email}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Edad:</span>
                            <span className="value">{currentUser.edad } años</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Peso:</span>
                            <span className="value">{currentUser.peso } kg</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Altura:</span>
                            <span className="value">{currentUser.altura } cm</span>
                        </div>
                        <div className="info-item full-width">
                            <span className="label">Objetivo:</span>
                            <span className="value">{currentUser.objetivo }</span>
                        </div>
                    </div>
                    <button className="btn-edit" onClick={() => navigate('/editar-perfil')}> Editar</button>
                </div>
            </div>

            <div className="retos-section">
                <h2>Tus Retos del Mes</h2>
                <div className="retos-grid">
                    {/*A través del array de retos previamente hecho lo recorremos con un map y lo mostramos con un porcentaje */}
                    {retos.map(reto => (
                        <div key={reto.id} className="reto-card">
                            <h4>{reto.nombre}</h4>
                            <div className="progreso">
                                <div className="barra">
                                    <div className="barra-llena"></div>
                                </div>
                                <p className="porcentaje">{Math.round((reto.completado / reto.total) * 100)}%</p>
                            </div>
                            <p className="valores">{reto.completado} / {reto.total}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

