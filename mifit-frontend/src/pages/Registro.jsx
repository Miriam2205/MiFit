import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/registro.css';

export const Register = () => {
  const API_URL = import.meta.env.VITE_API_URL 
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
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json()
      if (response.ok) {
        localStorage.setItem("lastEmail", formData.email)
        // Guardar datos del usuario para acceso posterior
        localStorage.setItem("user", JSON.stringify(formData))
        navigate('/login')
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
        {error && <p className="error-message">{error}</p>}

        <input className="inputformulario" type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />

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

