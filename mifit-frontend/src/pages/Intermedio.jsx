import React from 'react';
import { useNavigate } from 'react-router-dom';


//En este array tenemos todos los entrenamientos pero sólo mostraremos los de nivel intermedio
const planes = [
	{
		titulo: 'Fullbody Express',
		nivel: 'principiante',
		material: 'sin material',
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
		imagen: '/torso.png',
		duracion: 40,
		objetivo: 'Empuje y tirón equilibrado',
		ruta: '/torso'
	},
	{
		titulo: 'Pierna Intermedia',
		nivel: 'intermedio',
		material: 'barra o mancuernas',
		imagen: '/sentadilla.png',
		duracion: 45,
		objetivo: 'Fuerza de tren inferior y estabilidad',
		ruta: '/pierna'
	},
	{
		titulo: 'HIIT Intermedio',
		nivel: 'intermedio',
		material: 'sin material',
		imagen: '/hiit.jpg',
		duracion: 30,
		objetivo: 'Cardio intenso sin llegar al límite',
		ruta: '/hiit'
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

export const EntrenamientoIntermedio = () => {
	const navigate = useNavigate();
	return (
		<div className="planes-page">
			<h1>Entrenamientos intermedios</h1>
			<div className="planes-grid">
				{/*Recorremos el array de planes y mostramos sólo los de nivel intermedio */}
				{planes.map((plan) => {
					if (plan.nivel !== 'intermedio') return null;
					return (
						<div className="tarjeta-plan" key={plan.titulo} onClick={() => navigate(plan.ruta)} style={{ cursor: 'pointer' }}>							{plan.imagen && (
								<img
									src={plan.imagen}
									alt={plan.titulo}
									className="miniatura-plan"
								/>
							)}							<h3>{plan.titulo}</h3>
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

export default EntrenamientoIntermedio;
