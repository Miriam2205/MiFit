import { useEffect, useState } from "react";

export const ListaEjercicios = () => {
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/entrenamiento/ejercicios")
            .then(res => res.json())
            .then(data => {
                console.log("GET ejercicios:", data);
                setEjercicios(data.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h3>Ejercicios guardados</h3>
            <ul>
                {ejercicios.map(e => (
                    <li key={e._id}>
                        {e.nombre} – {e.series}x{e.repeticiones}
                    </li>
                ))}
            </ul>
        </div>
    );
};