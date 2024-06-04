import { validationResult } from 'express-validator';
import CustomError from '../utils/class.customError.js';

export const validateInput = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new CustomError(result.array()[0].msg, 403));
  }
  next();
};
