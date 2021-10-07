import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../RequestStatus/status';

const requestBodySchema = joi.object({
  refreshToken: joi.string().required().label('Refresh token'),
});

export default function ValidateRequestToken(
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
