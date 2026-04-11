import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { Menu } from "./componentes/NavBar.jsx";
import { Sidebar } from "./componentes/Sidebar.jsx";
import { Footer } from "./componentes/Footer.jsx";

import { EntrenamientoCard } from "./componentes/EntrenamientoCard.jsx";
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
import { EntrenamientoIntermedio } from "./pages/Intermedio.jsx";
import { EntrenamientoAvanzado } from "./pages/Avanzado.jsx";
import { AnadirEntrenamiento } from "./componentes/AnadirEntrenamiento.jsx";
import { ListaEjercicios } from "./componentes/Listaejercicios.jsx";
import { DetalleEntrenamiento } from "./pages/DetalleEntrenamiento.jsx";


import { Login } from "./pages/LoginPage.jsx";
import { Register } from "./pages/Registro.jsx";
import { Consejos } from "./pages/Consejos.jsx";
import { Perfil } from "./pages/Perfil.jsx";
import { EditarPerfil } from "./pages/EditarPerfil.jsx";
import { Comunidad } from "./pages/Comunidad.jsx";
import { useAuth } from "./context/AuthContext.jsx";

// Componente para rutas privadas
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, authReady } = useAuth();

  if (!authReady) {
    return null;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  const { isAuthenticated, authReady } = useAuth();
  const location = useLocation();
  const esAuthPage = location.pathname === "/login" || location.pathname === "/register";

  if (!authReady) {
    return null;
  }

  return (
    <div className="App">
      <Menu />
      {isAuthenticated && !esAuthPage && <Sidebar />}

      <main className={`Main-content ${isAuthenticated && !esAuthPage ? 'with-sidebar' : ''}`}>
        <Routes>
          {/* LOGIN */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* HOME*/}
          <Route
            path="/"
            element={isAuthenticated ? <EntrenamientoCard /> : <Navigate to="/login" replace />}
          />

          {/* RUTAS DE ENTRENAMIENTO */}
          <Route path="/torso" element={<EntrenamientoTorso />} />
          <Route path="/pierna" element={<EntrenamientoPierna />} />
          <Route path="/dominada" element={<EntrenamientoDominada />} />
          <Route path="/hiit" element={<EntrenamientoHiit />} />
          <Route path="/abdominales" element={<EntrenamientoAbdominales />} />
          <Route path="/principiante" element={<EntrenamientoPrincipiantes />} />
          <Route path="/intermedio" element={<EntrenamientoIntermedio />} />
          <Route path="/avanzado" element={<EntrenamientoAvanzado />} />
          <Route path="/pecho" element={<EntrenamientoPechoHombroTriceps />} />
          <Route path="/espalda" element={<EntrenamientoEspalda />} />
          <Route path="/gluteo" element={<EntrenamientoGluteo />} />
          <Route path="/fullbody" element={<EntrenamientoFullBody />} />
          <Route path="/calistenia/nivel" element={<CalisteniaNivel />} />
          <Route path="/calistenia/principiante" element={<CalisteniaPrincipiante />} />
          <Route path="/calistenia/intermedio" element={<CalisteniaIntermedio />} />

          {/* RUTAS DE FUNCIONALIDADES */}
          
          <Route path="/anadir" element={<PrivateRoute><AnadirEntrenamiento /></PrivateRoute>} />
          <Route path="/ejercicios" element={<PrivateRoute><ListaEjercicios /></PrivateRoute>} />
          <Route path="/entrenamiento/:id" element={<PrivateRoute><DetalleEntrenamiento /></PrivateRoute>} />
          <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
          <Route path="/editar-perfil" element={<PrivateRoute><EditarPerfil /></PrivateRoute>} />
          <Route path="/comunidad" element={<PrivateRoute><Comunidad /></PrivateRoute>} />

          {/* CONSEJOS */}
          <Route path="/consejos" element={<Consejos/>}/>
          {/* por si te equivocas de ruta: muestra algo */}
          <Route path="*" element={<h1>404 - Ruta no encontrada</h1>} />


        </Routes>
      </main>

      {!esAuthPage && <Footer />}
    </div>
  );
}

export default App;

