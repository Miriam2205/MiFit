import React, { useEffect, useState } from "react";

export const MisEntrenamientos = () => {
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/entrenamiento/ejercicios")
            .then(res => res.json())
            .then(data => {
                console.log("GET ejercicios:", data);
                setEjercicios(data.data);
            })
            .catch(err => console.error("Error GET:", err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Mis entrenamientos registrados</h2>

            {ejercicios.length === 0 ? (
                <p>Aún no has registrado entrenamientos.</p>
            ) : (
                <div style={{ display: "grid", gap: "15px" }}>
                    {ejercicios.map((ej) => (
                        <div 
                            key={ej._id}
                            
                            
                        >
                            <h3>{ej.nombre}</h3>
                            <p><strong>Series:</strong> {ej.series}</p>
                            <p><strong>Repeticiones:</strong> {ej.repeticiones}</p>
                            <p><strong>Peso:</strong> {ej.kg} kg</p>
                            <p><strong>Descanso:</strong> {ej.descanso}</p>
                            <p><strong>Sensaciones:</strong> {ej.sensaciones}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MisEntrenamientos;