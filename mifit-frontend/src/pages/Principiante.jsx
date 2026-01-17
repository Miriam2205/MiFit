import React from 'react';

//En este array tenemos todos los entrenamientos pero sólo mostraremos los de nivel principiante
const principiantes = [
    {
        titulo: 'Fullbody Express',
        nivel: 'principiante',
        material: 'sin material',
        imagen: "/Fullbody.png",
        duracion: 25,
        objetivo: 'Mover todo el cuerpo sin morir en el intento'
    },
    {
        titulo: 'Abdominales en casa',
        nivel: 'principiante',
        material: 'esterilla',
        duracion: 20,
        objetivo: 'Core básico para empezar'
    },
    {
        titulo: 'Primera dominada',
        nivel: 'principiante',
        material: 'goma + barra',
        duracion: 30,
        objetivo: 'Progresiones sencillas para la primera repetición'
    },
    {
        titulo: 'Torso Intermedio',
        nivel: 'intermedio',
        material: 'mancuernas',
        duracion: 40,
        objetivo: 'Empuje y tirón equilibrado'
    },
    {
        titulo: 'Fullbody Avanzado',
        nivel: 'avanzado',
        material: 'barra + discos',
        duracion: 55,
        objetivo: 'Fuerza y potencia'
    },
    {
        titulo: 'HIIT Fuego',
        nivel: 'avanzado',
        material: 'sin material',
        duracion: 30,
        objetivo: 'Cardio duro con intervalos'
    }
];

export const EntrenamientoPrincipiantes = () => {
    return (
        <div className="planes-page">
            <h1>Entrenamientos para principiantes</h1>
            <div className="planes-grid">
                {/*Recorremos el array de planes y mostramos sólo los de nivel principiante */}
                {principiantes.map((plan) => {
                    if (plan.nivel !== 'principiante') return null;
                    return (
                        <div className="tarjeta-plan" key={plan.titulo}>
                            {plan.imagen && (
                                <img
                                    src={plan.imagen}
                                    alt={plan.titulo}
                                    className="miniatura-plan"
                                />
                            )}
                            <h3>{plan.titulo}</h3>
                            <p className="etiqueta-nivel">Nivel: {plan.nivel}</p>
                            <p>Material: {plan.material}</p>
                            <p>Duración: {plan.duracion} min</p>
                            <p className="objetivo">{plan.objetivo}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EntrenamientoPrincipiantes;