import { USERS } from '../models/model.users.js';
import { handleErrorsAsync } from '../middlewares/errors.async.js';
import CustomError from '../utils/class.customError.js';

const create = handleErrorsAsync(async (req, res, next) => {
  const {
    companyID,
    firstName,
    middleName,
    lastName,
    role,
    email,
    password,
    password2,
  } = req.body;
  const newUser = await USERS.create({
    companyID,
    firstName,
    middleName,
    lastName,
    role,
    email,
    password,
  });

  res.status(200).json({
    status: 'success',
    message: 'new user added to database!',
    newUser,
  });
});

const all = handleErrorsAsync(async (req, res, next) => {
  const allUsers = await USERS.findAll();

  res.status(200).json({
    status: 'success',
    message: 'all users result',
    allUsers,
  });
});

export default {
  create,
  all,
};
