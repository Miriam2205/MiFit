require("dotenv").config();
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const {router} = require('./router')
const {Usuario} = require('./schema')
const bcrypt = require('bcrypt')

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
let server;

const conectar = async() => {
    try {
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
    } catch (error) {
        console.error(`Error al conectar ${error.message}`)
    }
}
conectar()

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

process.on('SIGINT', () => cerrarServidor('SIGINT'))
process.on('SIGTERM', () => cerrarServidor('SIGTERM'))

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

server = app.listen(PORT, () => console.info(`API escuchando en el puerto ${PORT}`))