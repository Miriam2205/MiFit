import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Perfil.css'

const API_URL = import.meta.env.VITE_API_URL

export const EditarPerfil = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        nombre: '',
        email: '',
        edad: '',
        peso: '',
        altura: '',
        objetivo: ''
    })

    // Cargar datos del usuario desde localStorage
    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (userData) {
            try {
                setUser(JSON.parse(userData))
            } catch (err) {
                console.log('Error al cargar datos del usuario', err)
            }
        }
    }, [])

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Enviar actualización del usuario
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('userId')

            console.log('Token:', token)
            console.log('UserId:', userId)
            console.log('API_URL:', API_URL)

            if (!token || !userId) {
                setError('Sesión expirada. Por favor inicia sesión de nuevo.')
                navigate('/login')
                return
            }

            const response = await fetch(`${API_URL}/usuario/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    nombre: user.nombre || undefined,
                    edad: user.edad ? parseInt(user.edad) : undefined,
                    peso: user.peso ? parseInt(user.peso) : undefined,
                    altura: user.altura ? parseInt(user.altura) : undefined,
                    objetivo: user.objetivo || undefined
                })
            })

            console.log('Response status:', response.status)

            if (!response.ok) {
                const data = await response.json()
                console.error('Error response:', data)
                throw new Error(data.message || 'Error al actualizar el perfil')
            }

            const data = await response.json()
            console.log('Success response:', data)
            
            // Actualizar localStorage con los nuevos datos
            localStorage.setItem('user', JSON.stringify(data.data))
            
            alert('Perfil actualizado correctamente')
            navigate('/perfil')
        } catch (error) {
            setError(error.message)
            console.error('Error actualizando perfil:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="perfil-container">
            <div className="perfil-header">
                <h1>Editar Perfil</h1>
                <button className="btn-logout" onClick={() => navigate('/perfil')}>Volver</button>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="perfil-info">
                <div className="info-card">
                    <h3>Información Personal</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={user.nombre}
                                onChange={handleChange}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="edad">Edad:</label>
                            <input
                                type="number"
                                id="edad"
                                name="edad"
                                value={user.edad}
                                onChange={handleChange}
                                placeholder="Ej: 25"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="peso">Peso (kg):</label>
                            <input
                                type="number"
                                id="peso"
                                name="peso"
                                value={user.peso}
                                onChange={handleChange}
                                placeholder="Ej: 75"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="altura">Altura (cm):</label>
                            <input
                                type="number"
                                id="altura"
                                name="altura"
                                value={user.altura}
                                onChange={handleChange}
                                placeholder="Ej: 180"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="objetivo">Objetivo:</label>
                            <textarea
                                id="objetivo"
                                name="objetivo"
                                value={user.objetivo}
                                onChange={handleChange}
                                placeholder="Describe tu objetivo de entrenamiento"
                                rows="4"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="btn-edit" 
                            disabled={loading}
                        >
                            {loading ? 'Guardando...' : 'Guardar cambios'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarPerfil
