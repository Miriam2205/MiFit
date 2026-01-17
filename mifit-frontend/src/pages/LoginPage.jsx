import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login-page.css"

export const Login = () => {
  const API_URL = import.meta.env.VITE_API_URL 

  const navigate = useNavigate()

  //Usamos estados para manejar los input de email, contraseña y error
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  //Usamos el useEffect para cargar el último email usado desde el localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("lastEmail")
    if (savedEmail) {
      setEmail(savedEmail)
    }
  }, [])
//Función que funciona cuando enviamos el formulario de login y limpia errores y guarda el último email usado. 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      //hacemos una petición POST a la API para loguear al usuario
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      //Convierte la respuesta a JSON y si el servidor responde bien guarda el token y datos del usuario en el localStorage y navega a la página principal
      const data = await response.json()
      if (response.ok) {
        
        localStorage.setItem("token", data.token)
        localStorage.setItem("lastEmail", email)

        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user))
        }

        navigate("/");
      } else {
        setError(data.message || "Credenciales incorrectas")
      }
    } catch (err) {
      setError("Error al conectar con el servidor")
    }
  };


  //Input de formulario de Login para rellenar
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="titulo">Iniciar Sesión</h2>

        {error && <p className="error-message">{error}</p>}

        <input className="inputformulario" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input className="inputformulario" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button className="submit-button" type="submit">
          Iniciar Sesión
        </button>

        <p> ¿No tienes cuenta? <a href="/register">Regístrate</a>
        </p>
      </form>
    </div>
  );
};




