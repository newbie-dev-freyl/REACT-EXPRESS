import { ValidationError } from 'sequelize';
import CustomError from '../utils/class.customError.js';

export const handleErrorsSequelize = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return next(new CustomError(err.errors[0].message, 500));
  }
  next(err);
};
