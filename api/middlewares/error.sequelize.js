import { ValidationError, DatabaseError } from 'sequelize'
import GetError from '../utils/class.getError.js'

export const getErrorSequelize = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        console.error('\x1b[31m%s\x1b[0m','Sequelize Validation Error: ' + err.errors[0].message)
        return next(new GetError(err.errors[0].message, 403))
    }

    if (err instanceof DatabaseError) {
        console.error('\x1b[31m%s\x1b[0m','Sequelize Database Error: ' + err.message)
        return next(new GetError(err.message, 403))
    }

    next(err)
}