const express = require ('express')
const router = express.Router()
const {getEntrenamiento, getEntrenamientoById, anadirEjercicioEntrenamiento, postProgreso, putEntrenamiento, deleteEntrenamiento, crearEntrenamiento, getUsuarios, postUsuario} = require ('./controller')
const {middleware404, middleware500} = require('./middlewares')

router.route('/entrenamiento')
    .get(getEntrenamiento)
    .put(putEntrenamiento)
    .post(crearEntrenamiento)

router.route('/entrenamiento/:_id')
    .get(getEntrenamientoById)
    .delete(deleteEntrenamiento)

router.route('/entrenamiento/:id/ejercicio')
    .post(anadirEjercicioEntrenamiento)

router.route('/progreso')
    .post(postProgreso)

router.route('/usuario')
    .get(getUsuarios)
    .post(postUsuario)

    


module.exports = {
    router
}
