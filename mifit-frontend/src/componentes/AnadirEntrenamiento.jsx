// Componente para añadir un entrenamiento completo con varios ejercicios
import React, { useState } from "react"
import { Toast } from "./Toast"
import { useToast } from "../hooks/useToast"
import "../styles/anadir-entrenamiento.css"

const API_URL = import.meta.env.VITE_API_URL
// 1 Formulario para rellenar
export const AnadirEntrenamiento = () => {
    
    const [entrenamiento, setEntrenamiento] = useState({
        titulo: "",
        nivel: "",
        material: "",
        duracion: "",
    });

    // 2 Formulario para añadir ejercicios y característias del entrenamiento
    const [ejercicio, setEjercicio] = useState({
        nombre: "",
        series: "",
        repeticiones: "",
        kg: "",
        descanso: "",
        sensaciones: "",
    });

    // usamos el useState para guardar la lista de ejercicios añadidos 
    const [listaEjercicios, setListaEjercicios] = useState([])
    const { toast, showToast, hideToast } = useToast("success")

    const handleChangeEntrenamiento = (e) => {
        setEntrenamiento({ ...entrenamiento, [e.target.name]: e.target.value })
    };


    const handleChangeEjercicio = (e) => {
        setEjercicio({ ...ejercicio, [e.target.name]: e.target.value })
    };

    // Añadir ejercicio a la lista
    const agregarEjercicio = () => {
        setListaEjercicios([...listaEjercicios, ejercicio])

        // Reset del ejercicio
        setEjercicio({
            nombre: "",
            series: "",
            repeticiones: "",
            kg: "",
            descanso: "",
            sensaciones: "",
        });
    };

    // Eliminar ejercicio
    const eliminarEjercicio = (index) => {
        setListaEjercicios(listaEjercicios.filter((_, i) => i !== index))
    };

    // Guardar entrenamiento completo
    const guardarEntrenamiento = async () => {
        const payload = {
            ...entrenamiento,
            ejercicios: listaEjercicios,
        };

        try {
            const res = await fetch(`${API_URL}/entrenamiento`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                showToast("Entrenamiento guardado correctamente ✔");

                // Reset total
                setEntrenamiento({
                    titulo: "",
                    nivel: "",
                    material: "",
                    duracion: "",
                });
                setListaEjercicios([]);
            } else {
                showToast("Error guardando entrenamiento", "error")
            }
        } catch (error) {
            showToast("Error conectando con el servidor", "error")
        }
    };

    return (
        <div className="Formulario">
            <h2>Crear Entrenamiento Completo</h2>

            {/* DATOS DEL ENTRENAMIENTO */}
            <div className="Formulario-card">
                <label>Título:</label>
                <input name="titulo" value={entrenamiento.titulo} onChange={handleChangeEntrenamiento} />

                <label>Nivel:</label>
                <input name="nivel" value={entrenamiento.nivel} onChange={handleChangeEntrenamiento} />

                <label>Material:</label>
                <input name="material" value={entrenamiento.material} onChange={handleChangeEntrenamiento} />

                <label>Duración (min):</label>
                <input name="duracion" type="number" value={entrenamiento.duracion} onChange={handleChangeEntrenamiento} />
            </div>

            <hr />

            {/* FORMULARIO DE EJERCICIOS */}
            <h3>Añadir ejercicios</h3>

            <div className="Formulario-card">
                <label>Ejercicio:</label>
                <input name="nombre" value={ejercicio.nombre} onChange={handleChangeEjercicio} />

                <label>Series:</label>
                <input name="series" type="number" value={ejercicio.series} onChange={handleChangeEjercicio} />

                <label>Repeticiones:</label>
                <input name="repeticiones" type="number" value={ejercicio.repeticiones} onChange={handleChangeEjercicio} />

                <label>Kg:</label>
                <input name="kg" type="number" value={ejercicio.kg} onChange={handleChangeEjercicio} />

                <label>Descanso:</label>
                <input name="descanso" type="number" value={ejercicio.descanso} onChange={handleChangeEjercicio} />

                <label>Sensaciones:</label>
                <input name="sensaciones" value={ejercicio.sensaciones} onChange={handleChangeEjercicio} />

                <button className="Boton" onClick={agregarEjercicio}>Añadir ejercicio</button>
            </div>

            {/* LISTA DE EJERCICIOS */}
            <div className="ListaEjercicios">
                <h3>Ejercicios añadidos</h3>

                {listaEjercicios.map((ej, index) => (
                    <div key={index} className="EjercicioItem">
                        <strong>{ej.nombre}</strong> ({ej.series} x {ej.repeticiones}) — {ej.kg} kg  
                        <button className="btn-papelera" onClick={() => eliminarEjercicio(index)}>🗑️</button>
                    </div>
                ))}
            </div>

            {/* GUARDAR ENTRENAMIENTO COMPLETO */}
            <button className="Boton GuardarFinal" onClick={guardarEntrenamiento}>
                Guardar entrenamiento completo
            </button>

            <Toast
                isVisible={toast.visible}
                message={toast.text}
                type={toast.type}
                onClose={hideToast}
            />
        </div>
    );
};

export default AnadirEntrenamiento;
