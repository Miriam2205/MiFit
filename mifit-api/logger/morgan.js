// Con morgan podemos registrar peticiones HTTP en la consola de forma sencilla y sirve para depurar las solicitudes que llegan a nuestro servidor.
// Tiny es un formado que nos muestra informacion de método, ruta, codigo de estado etc.
const morgan = require('morgan')

const httpLogger = morgan('tiny')

module.exports = {
    httpLogger
}