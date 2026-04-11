import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL


//Lista de ejrcicios guardados
export const ListaEjercicios = () => {
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/entrenamiento/ejercicios`)
            .then(res => res.json())
            .then(data => {
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