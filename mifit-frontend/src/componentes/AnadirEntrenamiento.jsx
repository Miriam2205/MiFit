// Componente para añadir un entrenamiento completo con varios ejercicios
import React, { useState } from "react"
import { Toast } from "./Toast"
import { useToast } from "../hooks/useToast"
import "../styles/anadir-entrenamiento.css"

const API_URL = import.meta.env.VITE_EXPRESS || import.meta.env.VITE_API_URL
const initialEntrenamiento = {
    titulo: "",
    nivel: "",
    material: "",
    duracion: "",
}

const initialEjercicio = {
    nombre: "",
    series: "",
    repeticiones: "",
    kg: "",
    descanso: "",
    sensaciones: "",
}

// 1 Formulario para rellenar
export const AnadirEntrenamiento = () => {
    
    const [entrenamiento, setEntrenamiento] = useState(initialEntrenamiento);

    // 2 Formulario para añadir ejercicios y característias del entrenamiento
    const [ejercicio, setEjercicio] = useState(initialEjercicio);

    // usamos el useState para guardar la lista de ejercicios añadidos 
    const [listaEjercicios, setListaEjercicios] = useState([])
    const { toast, showToast, hideToast } = useToast("success")

    const handleChangeEntrenamiento = (e) => {
        setEntrenamiento((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };


    const handleChangeEjercicio = (e) => {
        setEjercicio((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    // Añadir ejercicio a la lista
    const agregarEjercicio = () => {
        if (!ejercicio.nombre.trim()) {
            showToast("Añade el nombre del ejercicio", "error")
            return
        }

        setListaEjercicios((prev) => [...prev, ejercicio])

        // Reset del ejercicio
        setEjercicio(initialEjercicio);
    };

    // Eliminar ejercicio
    const eliminarEjercicio = (index) => {
        setListaEjercicios((prev) => prev.filter((_, i) => i !== index))
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
                setEntrenamiento(initialEntrenamiento);
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

            {/* CONTENEDOR DE CARDS LADO A LADO */}
            <div className="Formulario-cards-container">
                {/* DATOS DEL ENTRENAMIENTO */}
                <div className="Formulario-card">
                    <h3>Datos del entrenamiento</h3>
                
                <div className="FormularioCampo">
                    <label className="Label">Título:</label>
                    <input className="input" name="titulo" value={entrenamiento.titulo} onChange={handleChangeEntrenamiento} />
                </div>

                <div className="FormularioCampo">
                    <label className="Label">Nivel:</label>
                    <input className="input" name="nivel" value={entrenamiento.nivel} onChange={handleChangeEntrenamiento} />
                </div>

                <div className="FormularioCampo">
                    <label className="Label">Material:</label>
                    <input className="input" name="material" value={entrenamiento.material} onChange={handleChangeEntrenamiento} />
                </div>

                <div className="FormularioCampo">
                    <label className="Label">Duración (min):</label>
                    <input className="input" name="duracion" type="number" value={entrenamiento.duracion} onChange={handleChangeEntrenamiento} />
                </div>
            </div>

            {/* FORMULARIO DE EJERCICIOS */}
            <div className="Formulario-card">
                <h3>Añadir ejercicios</h3>
                
                <div className="FormularioCampo">
                    <label className="Label">Ejercicio:</label>
                    <input className="input" name="nombre" value={ejercicio.nombre} onChange={handleChangeEjercicio} />
                </div>

                <div className="FormularioCampo">
                    <label className="Label">Series:</label>
                    <input className="input" name="series" type="number" value={ejercicio.series} onChange={handleChangeEjercicio} />
                </div>

                <div className="FormularioCampo">
                    <label className="Label">Repeticiones:</label>
                    <input className="input" name="repeticiones" type="number" value={ejercicio.repeticiones} onChange={handleChangeEjercicio} />
                </div>

                <div className="FormularioCampo">
                    <label className="Label">Kg:</label>
                    <input className="input" name="kg" type="number" value={ejercicio.kg} onChange={handleChangeEjercicio} />
                </div>

                <div className="FormularioCampo">
                    <label className="Label">Descanso:</label>
                    <input className="input" name="descanso" type="number" value={ejercicio.descanso} onChange={handleChangeEjercicio} />
                </div>

                <div className="FormularioCampo">
                    <label className="Label">Sensaciones:</label>
                    <input className="input" name="sensaciones" value={ejercicio.sensaciones} onChange={handleChangeEjercicio} />
                </div>

                <button className="Boton" onClick={agregarEjercicio}>Añadir ejercicio</button>
            </div>
            </div>

            {/* LISTA DE EJERCICIOS */}
            <div className="ListaEjercicios">
                <h3>Ejercicios añadidos</h3>

                {listaEjercicios.length > 0 ? (
                    listaEjercicios.map((ej, index) => (
                        <div key={index} className="EjercicioItem">
                            <div>
                                <strong>{ej.nombre}</strong> ({ej.series} x {ej.repeticiones}) — {ej.kg} kg
                            </div>
                            <button className="btn-papelera" onClick={() => eliminarEjercicio(index)} aria-label="Eliminar ejercicio">🗑️</button>
                        </div>
                    ))
                ) : (
                    <p className="MensajeVacio">No hay ejercicios añadidos</p>
                )}
            </div>

            {/* GUARDAR ENTRENAMIENTO COMPLETO */}
            <button className="Boton-GuardarFinal" onClick={guardarEntrenamiento}>
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
