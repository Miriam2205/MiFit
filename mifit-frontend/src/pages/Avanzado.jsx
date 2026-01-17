import React from 'react'

//Array de planes de entrenamiento, podemos ver que tenemos de todos los niveles pero con el filter solo nos mostrará en pantalla el que le indiquemos, en este caso el avanzado.
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
		duracion: 40,
		objetivo: 'Empuje y tirón equilibrado'
	},
	{
		titulo: 'Pierna Intermedia',
		nivel: 'intermedio',
		material: 'barra o mancuernas',
		duracion: 45,
		objetivo: 'Fuerza de tren inferior y estabilidad'
	},
	{
		titulo: 'HIIT Intermedio',
		nivel: 'intermedio',
		material: 'sin material',
		duracion: 30,
		objetivo: 'Cardio intenso sin llegar al límite'
	},
	{
		titulo: 'Fullbody Avanzado',
		nivel: 'avanzado',
		material: 'barra + discos',
		duracion: 55,
		objetivo: 'Fuerza y potencia'
	},
	{
		titulo: 'Torso/Pierna Avanzado',
		nivel: 'avanzado',
		material: 'barra + discos',
		duracion: 60,
		objetivo: 'Volumen y carga alta'
	},
	{
		titulo: 'HIIT Fuego',
		nivel: 'avanzado',
		material: 'sin material',
		duracion: 30,
		objetivo: 'Cardio duro con intervalos'
	}
];

export const EntrenamientoAvanzado = () => {
	return (
		<div className="planes-page">
			<h1>Entrenamientos avanzados</h1>
			<div className="planes-grid">
				{planes.map((plan) => {
					{/*Con esta línea lo que estamos diciendo es que de toda la lista nos filtre los que son de nivel avanzado*/}
					if (plan.nivel !== 'avanzado') return null
					return (
						<div className="tarjeta-plan" key={plan.titulo}>
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

export default EntrenamientoAvanzado
