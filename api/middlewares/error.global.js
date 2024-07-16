export const getErrorGlobal = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'

    if (!err.isOperational) {
        console.error('\x1b[31m%s\x1b[0m', 'Programmers Error: ' + err.message)
        err.message = 'Something went nuts!'
    }
    
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}