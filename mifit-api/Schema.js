

const mongoose = require('mongoose');

//Login
const usuarioSchema = new mongoose.Schema(
  { nombre: String, edad: Number, curso: String, aprobado: Boolean, email: String, password: String },
  { collection: "login" }
);

// Ejercicio 
const ejercicioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    series: { type: Number, required: true },
    repeticiones: { type: Number, required: true },
    kg: { type: Number },
    sensaciones: { type: String },
    descanso: { type: String },
    fecha: { type: Date, default: Date.now }
});

//  Progreso 
const progresoSchema = new mongoose.Schema({
    fecha: Date,
    peso: Number,
    brazo: Number,
    cintura: Number,
    cuadriceps: Number,
    cuello: Number,
    cadera: Number,
    pantorrilla: Number
}, { collection: 'progreso' });

//  Entrenamiento 
const entrenamientoSchema = new mongoose.Schema({
    titulo: String,
    nivel: String,
    material:String,
    duracion:Number,
    ejercicios:[{
        nombre:String,
        series:Number,
        repeticiones:Number,
        kg:Number,
        descanso:String,
        sensaciones:String
      }]
}, { collection : 'entrenamiento' });

const Usuario = mongoose.model("Usuario", usuarioSchema);
const Entrenamiento = mongoose.model('Entrenamiento', entrenamientoSchema);
const Progreso = mongoose.model('Progreso', progresoSchema);

module.exports = {
  Entrenamiento,
  Progreso, 
  Usuario
};