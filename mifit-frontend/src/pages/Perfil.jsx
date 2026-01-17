import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Perfil.css'

const API_URL = import.meta.env.VITE_API_URL 


export const Perfil = () => {
    const navigate = useNavigate()
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
    const [user, setUser] = useState(defaultUser)
    const [retos, setRetos] = useState([
        { id: 1, nombre: 'Hacer 100 flexiones', completado: 45, total: 100 },
        { id: 2, nombre: 'Entrenamientos semanales', completado: 3, total: 5 },
        { id: 3, nombre: 'Calorías quemadas', completado: 2500, total: 5000 }
    ]);

    //usamos el useEffect para cargar los datos del usuario y lee los datos del user.Si existen los convierte en JSON y sino usa el usuario por defecto.
    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (userData) {
            try {
                setUser(JSON.parse(userData))
                return
            } catch (err) {
                console.log('No se pudo leer user de localStorage', err)
            }
        }
        setUser(defaultUser)
    }, []);

    //Esta función es para cerrar sesión y borra la sesión guardada del localStorage y por últimp redirige a la página de login
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    };

    return (
        <div className="perfil-container">
            <div className="perfil-header">
                <h1>¡Hola, {user.nombre }!</h1>
                <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
            </div>

            <div className="perfil-info">
                <div className="info-card">
                    <h3>Información Personal</h3>
                    {/*Primer gran div para la información de registro que habíamos dado */}
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="label">Email:</span>
                            <span className="value">{user.email}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Edad:</span>
                            <span className="value">{user.edad } años</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Peso:</span>
                            <span className="value">{user.peso } kg</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Altura:</span>
                            <span className="value">{user.altura } cm</span>
                        </div>
                        <div className="info-item full-width">
                            <span className="label">Objetivo:</span>
                            <span className="value">{user.objetivo }</span>
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

