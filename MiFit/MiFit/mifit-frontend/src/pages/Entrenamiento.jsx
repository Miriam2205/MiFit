// pages/Entrenamientos.jsx
import { useState, useEffect } from "react";

export const Entrenamientos = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/entrenamiento")
            .then(res => res.json())
            .then(data => setLista(data.data));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todos los entrenamientos</h1>

            {lista.map(e => (
                <div key={e._id}>
                    <h3>{e.titulo}</h3>
                </div>
            ))}
        </div>
    );
};

