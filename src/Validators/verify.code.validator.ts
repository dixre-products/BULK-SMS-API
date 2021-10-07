import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../RequestStatus/status';

const requestBodySchema = joi.object({
  pin: joi.string().required().length(4),
  accessToken: joi.string().required().label('Access token'),
});

export default function ValidateNumberVerificationUpMiddleWare(
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
