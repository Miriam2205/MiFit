import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/detalle-entrenamiento.css';

const API_URL = import.meta.env.VITE_API_URL 

//En esta página mostramos el detalle completo de un entrenamiento seleccionado por el usuario que previamnete habíamos creado en AñadirEntrenamiento
export const DetalleEntrenamiento = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    //Estados para guardar el entrenamiento y error
    const [entrenamiento, setEntrenamiento] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    //useEffect para cargar el entrenamiento y se vuelve a cargar si cambia el id
    useEffect(() => {
        const cargarEntrenamiento = async () => {
            try {
                const res = await fetch(`${API_URL}/entrenamiento/${id}`)
                if (!res.ok) throw new Error('Error al cargar entrenamiento')
                
                const data = await res.json()
                setEntrenamiento(data.data || data)
                setCargando(false)
            } catch (err) {
                setError(err.message)
                setCargando(false)
            }
        };

        cargarEntrenamiento()
    }, [id]);

    //Esta parte sirve para controlar los estados de carga, error y si no se encuentra el entrenamiento salta un mensaje
    if (cargando) return <div className="detalle-container"><p>Cargando...</p></div>
    if (error) return <div className="detalle-container">Error: {error}</div>
    if (!entrenamiento) return <div className="detalle-container"><p>Entrenamiento no encontrado</p></div>;

    //Dentro del return es la parte visual de la página y tenemos dos grandes div. Uno es el header donde mostramos el titulo, nivel, material y duración. 
    return (
        <div className="detalle-container">
            <button className="volver-btn" onClick={() => navigate(-1)}>← Volver</button>
            
            <div className="detalle-header">
                <h1>{entrenamiento.titulo}</h1>
                {entrenamiento.nivel && <p className="nivel"><strong>Nivel:</strong> {entrenamiento.nivel}</p>}
                {entrenamiento.material && <p className="material"><strong>Material:</strong> {entrenamiento.material}</p>}
                {entrenamiento.duracion && <p className="duracion"><strong>Duración:</strong> {entrenamiento.duracion}</p>}
            </div>

            {/*Este es el otro div donde mostramos la lista de ejercicios que forman el entrenamiento*/}
            {entrenamiento.ejercicios && entrenamiento.ejercicios.length > 0 ? (
                <div className="ejercicios-lista">
                    <h2>Ejercicios</h2>
                    <ul>
                        {entrenamiento.ejercicios.map((ejercicio, idx) => (
                            <li key={idx} className="ejercicio-item">
                                <h3>{ejercicio.nombre}</h3>
                                {ejercicio.descripcion && <p><strong>Descripción:</strong> {ejercicio.descripcion}</p>}
                                {ejercicio.series && <p><strong>Series:</strong> {ejercicio.series}</p>}
                                {ejercicio.repeticiones && <p><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>}
                                {ejercicio.descanso && <p><strong>Descanso:</strong> {ejercicio.descanso}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No hay ejercicios registrados para este entrenamiento.</p>
            )}
        </div>
    );
};
