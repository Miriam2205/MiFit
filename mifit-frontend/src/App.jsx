import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Menu } from "./componentes/NavBar";
import { Sidebar } from "./componentes/Sidebar.jsx";
import { Footer } from "./componentes/Footer.jsx";

import { EntrenamientoCard } from "./componentes/EntrenamientoCard";
import { EntrenamientoTorso } from "./pages/EntrenamientoTorso.jsx";
import { EntrenamientoPierna } from "./pages/EntrenamientoPierna.jsx";
import { EntrenamientoDominada } from "./pages/Dominada.jsx";
import { EntrenamientoAbdominales } from "./pages/Abdominales.jsx";
import { EntrenamientoHiit } from "./pages/Hiit.jsx";
import { EntrenamientoPechoHombroTriceps } from "./pages/Pecho.jsx";
import { EntrenamientoEspalda } from "./pages/Espalda.jsx";
import { EntrenamientoGluteo } from "./pages/Gluteo.jsx";
import { EntrenamientoFullBody } from "./pages/Fullbody.jsx";
import { CalisteniaNivel } from "./pages/CalisteniaNivel.jsx";
import { CalisteniaPrincipiante } from "./pages/CalisteniaPrincipiante.jsx";
import { CalisteniaIntermedio } from "./pages/CalisteniaIntermedio.jsx";
import { EntrenamientoPrincipiantes } from "./pages/Principiante.jsx";
import { AnadirEntrenamiento } from "./componentes/AnadirEntrenamiento.jsx";
import { ListaEjercicios } from "./componentes/Listaejercicios.jsx";
import { MisEntrenamientos } from "./pages/MisEntrenamientos.jsx";
import { Entrenamientos } from "./pages/Entrenamiento.jsx";

import { Login } from "./pages/LoginPage.jsx";

export const Login = ()=> {
  const token = localStorage.getItem("token")
  const location = useLocation()
  const esLogin = location.pathname === "/login"


  return (
    <div className="App">
      <Menu />
      <Sidebar />

      <main className="Main-content">
        <Routes>
          <div className="App">
      {!esLogin && <Menu />}
      {!esLogin && <Sidebar />}

      <main className="Main-content">
        <Routes>
          {/* LOGIN */}
          <Route path="/login" element={<Login />} />

          {/* HOME: si no hay token -> login */}
          <Route
            path="/"
            element={token ? <EntrenamientoCard /> : <Navigate to="/login" replace />}
          />

          {/* Si alguien escribe una ruta que no existe */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!esLogin && <Footer />}
    </div>

          {/* públicas */}
          <Route path="/" element={<EntrenamientoCard />} />
          <Route path="/torso" element={<EntrenamientoTorso />} />
          <Route path="/pierna" element={<EntrenamientoPierna />} />
          <Route path="/dominada" element={<EntrenamientoDominada />} />
          <Route path="/hiit" element={<EntrenamientoHiit />} />
          <Route path="/abdominales" element={<EntrenamientoAbdominales />} />
          <Route path="/principiante" element={<EntrenamientoPrincipiantes />} />
          <Route path="/pecho" element={<EntrenamientoPechoHombroTriceps />} />
          <Route path="/espalda" element={<EntrenamientoEspalda />} />
          <Route path="/gluteo" element={<EntrenamientoGluteo />} />
          <Route path="/fullbody" element={<EntrenamientoFullBody />} />
          <Route path="/calistenia/nivel" element={<CalisteniaNivel />} />
          <Route path="/calistenia/principiante" element={<CalisteniaPrincipiante />} />
          <Route path="/calistenia/intermedio" element={<CalisteniaIntermedio />} />

          {/* privadas */}
          <Route path="/anadir" element={<PrivateRoute><AnadirEntrenamiento /></PrivateRoute>} />
          <Route path="/misentrenamientos" element={<PrivateRoute> <MisEntrenamientos /> </PrivateRoute>} />
          <Route path="/ejercicios" element={<PrivateRoute> <ListaEjercicios /></PrivateRoute>}
          />
          <Route path="/entrenamientos" element={<PrivateRoute> <Entrenamientos />
          </PrivateRoute>
          }
          />
          {/* por si te equivocas de ruta: muestra algo */}
          <Route path="*" element={<h1>404 - Ruta no encontrada</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

