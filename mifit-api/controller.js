
const  {Entrenamiento, Progreso, Usuario} = require ('./Schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const registro = async (req, res, next) => {
    try {
        const {nombre, email, password, edad, genero, peso, altura, objetivo} = req.body
        const usuarioExistente = await Usuario.findOne({email})
        if(usuarioExistente) {
            return res.status(400).json({message: 'El email ya está registrado'})
        }
        //encriptar contraseña
        const salt = await bcrypt.genSalt(10)
        const passwordEncriptado = await bcrypt.hash(password, salt)

        //crear nuevo usuario
        const nuevoUsuario = new Usuario({
            nombre,
            email,
            password:passwordEncriptado,
            edad,
            genero,
            peso,
            altura,
            objetivo
        });
        await nuevoUsuario.save();

        //crea token
        const token = jwt.sign(
            {id:nuevoUsuario._id, email:nuevoUsuario.email},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        )

        res.status(201).json({message: 'Usuario registrado', token})
    } catch (error) {
        next(error)
    }
}

//OBTENER ENTRENAMIENTOS
const getEntrenamiento = async (req, res, next) => {
    try {
        const buscar = await Entrenamiento.find()
        res.status(200).json({ status: 200, message: `Buscando workout`, data: buscar })
    } catch (error) {
        next(error)
    }
}

//OBTENER ENTRENAMIENTO POR ID
const getEntrenamientoById = async (req, res, next) => {
    try {
        const { _id } = req.params
        const buscar = await Entrenamiento.findById(_id)
        res.status(200).json({ message: `Buscando mediante _id ${_id}`, data: buscar })
    } catch (error) {
        next(error)
    }
}

//CREAR ENTRENAMIENTO
const crearEntrenamiento = async (req, res, next) => {
    try {
        const { titulo, nivel, material, duracion, ejercicios } = req.body;

        const nuevo = new Entrenamiento({
            titulo,
            nivel,
            material,
            duracion,
            ejercicios: ejercicios || []   // <--- AQUÍ EL ARREGLO
        });

        const guardado = await nuevo.save();

        res.status(201).json({
            status: 200,
            message: "Entrenamiento creado",
            data: guardado
        });
    } catch (error) {
        next(error);
    }
};



const anadirEjercicioEntrenamiento = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("BODY RECIBIDO:", req.body); // DEBUG

        const ejercicio = req.body;

        const entrenamiento = await Entrenamiento.findByIdAndUpdate(
            id,
            { $push: { ejercicios: ejercicio } },
            { new: true }                        // Devuelve el documento actualizado
        );

        if (!entrenamiento) {
            return res.status(404).json({ mensaje: "Entrenamiento no encontrado" });
        }

        res.status(200).json(entrenamiento);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



//EDITAR ENTRENAMIENTO
const putEntrenamiento = async (req, res, next) => {
    try {
        const { _id, ...datos } = req.body;
        const actualizar = await Entrenamiento.findByIdAndUpdate(_id, datos);
        const buscar = await Entrenamiento.find();
        res.status(200).json({ status: 200, message: `Actualizando datos`, data: buscar });
    } catch (error) {
        next(error);
    }
};


//ELIMINAR ENTRENAMIENTO
const deleteEntrenamiento = async (req, res, next) => {
    try {
        const { _id } = req.params;
        const eliminar = await Entrenamiento.findByIdAndDelete(_id);
        const buscar = await Entrenamiento.find();
        res.status(200).json({ status: 200, message: `Haciendo delete`, data: buscar });
    } catch (error) {
        next(error);
    }
};


//PROGRESO FÍSICO

const postProgreso = async (req, res, next) => {
    try {
        let {fecha, peso, brazo, cintura, cuadriceps, cuello, cadera, pantorrilla} = req.body
        if (typeof fecha === 'string') {
            const [dia, mes, anio] = fecha.split(/[-/]/)
            fecha = new Date (`${anio}- ${mes}-${dia}`)
        }
        const nuevo = new Progreso ( {
            fecha: fecha,
            peso: peso,
            brazo: brazo,
            cintura: cintura,
            cuadriceps: cuadriceps,
            cuello: cuello,
            cadera: cadera, 
            pantorrilla: pantorrilla
        })
        await nuevo.save()
        const buscar = await Progreso.find()
        res.status(201).json({message: `Se ha pubicado un nuevo progreso`, data: buscar})
    } catch (error) {
        next(error)
    }
}




//LOGIN USUARIO
const loginUsuario = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const usuario = await Usuario.findOne({email})
        if(!usuario) {
            return res.status(400).json({message: 'Usuario no encontrado'})
        }
        const passwordValido = await bcrypt.compare(password, usuario.password)
        if(!passwordValido) {
            return res.status(400).json({message: 'Contraseña incorrecta'})
        }
        const token = jwt.sign(
            {id:usuario._id, email:usuario.email},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        )
        res.status(200).json({message: 'Login exitoso', token})
    } catch (error) {
        next(error)
    }
}

//GET USUARIOS
const getUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find()
        res.status(200).json({data: usuarios})
    } catch (error) {
        next(error)
    }
}

//POST USUARIO (REGISTRO)
const postUsuario = async (req, res, next) => {
    await registro(req, res, next)
}




module.exports = {
    getEntrenamiento,
    getEntrenamientoById,
    putEntrenamiento,
    deleteEntrenamiento,
    postProgreso,
    crearEntrenamiento,
    anadirEjercicioEntrenamiento,
    getUsuarios,
    postUsuario,
    loginUsuario
}