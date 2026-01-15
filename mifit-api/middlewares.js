const middleware404 = (req, res, next) => {
    const error = new Error()
        error.message = `No existe ese endpoint`
        error.status = 404
    next(error)
}


const middleware500 = (error, req, res, next) => {
    let status = error.status || 500
        let message = error.message || `Hay un error interno en la API`
        let data = null
    
        res.status(500).json({status, message, data})
    }
    
    module.exports = {
        middleware404,
        middleware500
    }
