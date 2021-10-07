import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../RequestStatus/status';

const requestBodySchema = joi.object({
  accessToken: joi.string().required().label('Access token'),
  password: joi.string().min(7).required().label('Password'),
});

export default function ValidatePasswordRessetMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { error } = requestBodySchema.validate(req.body, {
    errors: {
      wrap: {
        label: '',
      },
    },
  });
  if (error) {
    return InvalidInputs(res, error.message);
  }
  next();
}
