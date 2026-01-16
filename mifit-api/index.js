console.clear()
console.log(`Iniciando api`)

require("dotenv").config();
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const {router} = require('./router')
const {Usuario} = require('./Schema')
const bcrypt = require('bcrypt')

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

const conectar = async() => {
    await mongoose.connect(DATABASE_URL)
         .then(async () => {
             console.log(`Mongoose conectado a ${DATABASE_URL}`)
             // Crear usuario de prueba si no existe
             const usuarioExistente = await Usuario.findOne({email: 'test@example.com'})
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
                 console.log('Usuario de prueba creado: email: test@example.com, password: password123')
             }
         })
         .catch( error => console.log(`Error al conectar ${error.message}`))
}
conectar()

const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(router)




app.listen(PORT, ()=> console.log(`Iniciando api en el puesto ${PORT}`))