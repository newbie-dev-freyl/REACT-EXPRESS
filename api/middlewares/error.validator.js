import { validationResult } from 'express-validator';
import GetError from '../utils/class.getError.js';
export const getErrorValidator = (req, res, next) => {
    const err = validationResult(req)
    if(!err.isEmpty()) {
        console.error('\x1b[31m%s\x1b[0m', 'Express Validator Error: ' + err.array()[0].msg)
        return next(new GetError(err.array()[0].msg, 403))
    }
    next()
}