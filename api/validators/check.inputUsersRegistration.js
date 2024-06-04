import { check } from 'express-validator';

export const checkInput = [
  check('password')
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/)
    .withMessage(
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!'
    )
    .bail(),
  check('password2')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password did not matched!');
      }
      return true;
    })
    .bail(),
];
