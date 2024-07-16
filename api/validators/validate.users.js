import { check } from "express-validator";

export const validate = [
    check('firstName').trim().isLength({ min: 2}).withMessage('First name atleast 2 characters')
]