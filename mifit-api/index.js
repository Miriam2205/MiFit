// Cargar dotenv solo si no estamos en Vercel
if (!process.env.VERCEL) {
  require('dotenv').config()
}

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const {router} = require('./router')
const {Usuario} = require('./schema')
const bcrypt = require('bcrypt')
const {middleware404, middleware500} = require('./middlewares')
const {httpLogger} = require('./logger/morgan')

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
let server;
let databaseReadyPromise;

const conectar = async() => {
    if (!DATABASE_URL) {
        throw new Error('Falta la variable de entorno DATABASE_URL')
    }

    if (mongoose.connection.readyState === 1) {
        return
    }

    if (databaseReadyPromise) {
        return databaseReadyPromise
    }

    databaseReadyPromise = (async () => {
        await mongoose.connect(DATABASE_URL)

        // Crear usuario de prueba si no existe
        const usuarioExistente = await Usuario.findOne({ email: 'test@example.com' })
        if (!usuarioExistente) {
            const salt = await bcrypt.genSalt(10)
            const passwordEncriptado = await bcrypt.hash('password123', salt)
            const usuarioPrueba = new Usuario({
                nombre: 'Usuario Prueba',
                email: 'test@example.com',
                password: passwordEncriptado,
                edad: 25,
                genero: 'Masculino',
                peso: 70,
                altura: 175,
                objetivo: 'Ganar masa muscular'
            })
            await usuarioPrueba.save()
        }

        console.info('Conexión con MongoDB establecida correctamente')
    })()

    try {
        await databaseReadyPromise
    } catch (error) {
        databaseReadyPromise = null
        console.error(`Error al conectar ${error.message}`)
        throw error
    }
}

const cerrarServidor = (signal) => {
    console.info(`\n${signal} recibido. Cerrando servidor y desconectando MongoDB...`)

    if (server) {
        server.close(async () => {
            try {
                await mongoose.disconnect()
                console.info('Conexión con MongoDB cerrada correctamente')
                process.exit(0)
            } catch (error) {
                console.error(`Error al cerrar MongoDB: ${error.message}`)
                process.exit(1)
            }
        })
        return
    }

    mongoose.disconnect()
        .then(() => {
            console.info('Conexión con MongoDB cerrada correctamente')
            process.exit(0)
        })
        .catch((error) => {
            console.error(`Error al cerrar MongoDB: ${error.message}`)
            process.exit(1)
        })
}

const app = express()
app.use(cors())
app.use(httpLogger)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(async (req, res, next) => {
    try {
        await conectar()
        next()
    } catch (error) {
        console.error('Error en middleware de conexión:', error.message)
        res.status(500).json({ status: 500, message: 'Error al conectar a la base de datos', data: null })
    }
})
app.use(router)
app.use(middleware404)
app.use(middleware500)

if (!process.env.VERCEL) {
    process.on('SIGINT', () => cerrarServidor('SIGINT'))
    process.on('SIGTERM', () => cerrarServidor('SIGTERM'))

    conectar()
        .then(() => {
            server = app.listen(PORT, () => console.info(`API escuchando en el puerto ${PORT}`))
        })
        .catch(() => {
            process.exit(1)
        })
}

module.exports = app