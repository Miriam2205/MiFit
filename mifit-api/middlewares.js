const middleware404 = (req, res, next) => {
    const error = new Error()
        error.message = `No existe ese endpoint`
        error.status = 404
    next(error)
}


const middleware500 = (error, req, res, next) => {
    const status = error.status || 500
    const message = error.message || `Hay un error interno en la API`
    const data = null

    console.error(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${status}: ${message}`)

    res.status(status).json({ status, message, data })
}
    
    module.exports = {
        middleware404,
        middleware500
    }
