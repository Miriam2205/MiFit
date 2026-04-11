import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import '../styles/registro.css'

export const Register = () => {
  const API_URL = import.meta.env.VITE_API_URL 
  //Guardamos los datos del formulario 
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    edad: '',
    genero: '',
    peso: '',
    altura: '',
    objetivo: ''
  });
  //Guardamos mensajes de error si falla 
  const [error, setError] = useState('')
  const nombreInputRef = useRef(null)
  const errorMessageRef = useRef(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  useEffect(() => {
    nombreInputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (error) {
      errorMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [error])

  //Manejamos los cambios en los  inputs del formulario y actualizamos el estado formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',},
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        const userToStore = data.user || {
          nombre: formData.nombre,
          email: formData.email,
          edad: formData.edad,
          genero: formData.genero,
          peso: formData.peso,
          altura: formData.altura,
          objetivo: formData.objetivo,
        }

        login({
          token: data.token,
          user: userToStore,
          userId: data.user?._id,
          email: formData.email,
        })

        navigate('/')
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError('Error al conectar con el servidor')
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className= "titulo">Registrarse</h2>
        {error && <p ref={errorMessageRef} className="error-message">{error}</p>}

        <input ref={nombreInputRef} className="inputformulario" type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />

        <input className="inputformulario" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

        <input className="inputformulario" type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />

        <input className="inputformulario" type="number" name="edad" placeholder="Edad" value={formData.edad} onChange={handleChange} required />
        
        <select className="select" name="genero" value={formData.genero} onChange={handleChange} required >
          <option value="">Seleccionar Género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        
        <input className="inputformulario" type="number" name="peso" placeholder="Peso (kg)" value={formData.peso} onChange={handleChange} required />
        <input className="inputformulario" type="number" name="altura" placeholder="Altura (cm)" value={formData.altura} onChange={handleChange} required />
        <input className="inputformulario" type="text" name="objetivo" placeholder="Objetivo" value={formData.objetivo} onChange={handleChange} required />
        <button className="submit-button" type="submit">Registrarse</button>
        <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
      </form>
    </div>
  );
};

