import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

export const Login = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  useEffect(() => {
    const savedEmail = localStorage.getItem("lastEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar sesión
        localStorage.setItem("token", data.token);

        // guardar usuario
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        navigate("/");
      } else {
        setError(data.message || "Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
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




