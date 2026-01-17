import React from "react";
import "../styles/Comunidad.css";

//tenemos tres arrays de usuarios, retos y ranking para simular un portal de comunidad tipo red social. Luego haremos tres map para mostrar cada uno
const usuarios = [
  { id: 1, usuario: "Ana G.",imagen: "/anauser.jpg" , texto: "Terminé el reto de 50 flexiones diarias.", likes: 42, comentarios: 12 },
  { id: 2, usuario: "Carlos M.", imagen: "/usuario.jpg", texto: "Rutina rápida de HIIT 20 min para mañanas.", likes: 28, comentarios: 7 },
  { id: 3, usuario: "Lucía R.", imagen: "/luciauser.jpg", texto: "De 0 a 4 dominadas estrictas en 5 semanas.", likes: 35, comentarios: 9 },
];

const retos = [
  { id: 1, titulo: "Reto Core 14 días", progreso: 60 },
  { id: 2, titulo: "Pasos semanales", progreso: 45 },
  { id: 3, titulo: "Flexiones en 30 días", progreso: 72 },
];

const ranking = [
  { id: 1, nombre: "Patri", puntos: 980 },
  { id: 2, nombre: "Mario", puntos: 920 },
  { id: 3, nombre: "Alba", puntos: 905 },
];

export const Comunidad= () => {
  return (
    <div className="comunidad">
      <h1>Comunidad</h1>
      <p>Aquí puedes ver publicaciones, retos y ranking.</p>

      <h2>Publicaciones</h2>
      {/*Con el array usuarios y el map podemos ver todos los usuarios de la comunidad*/}
      {usuarios.map((user) => (
        <div key={user.id} className="card">
          <div className="card-header">
            <img src={user.imagen} alt={user.usuario} className="usuario-avatar" />
            <strong>{user.usuario}</strong>
          </div>
          <p>{user.texto}</p>
          <div className="card-likes">
            
            <span>{user.likes} likes</span>
            <span>{user.comentarios} comentarios</span>
          </div>
        </div>
      ))}

      <h2>Retos</h2>
      {/*Con el array retos y el map podemos ver todos los retos de la comunidad*/}
      {retos.map((retos) => (
        <div key={retos.id} className="card">
          <strong>{retos.titulo}</strong>
          <p>Progreso: {retos.progreso}%</p>
          <div className="barra">
            <div className="barra-progreso"  />
          </div>
        </div>
      ))}

      <h2>Ranking</h2>
      {/*Con el array ranking y el map podemos ver todos los usuarios del ranking de la comunidad*/}
      <ol>
        {ranking.map((ranking) => (
          <li key={ranking.id}>
            {ranking.nombre} - {ranking.puntos} pts
          </li>
        ))}
      </ol>
    </div>
  );
};
