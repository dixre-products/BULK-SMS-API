import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../../RequestStatus/status';

const requestBodySchema = joi.object({
  id: joi.string().required().label('Message ID'),

  updates: joi.object({
    sender: joi.string(),
    message: joi.string(),
    status: joi.string(),
    time: joi.date(),
    date: joi.date(),
    groupId: joi.string(),

    contacts: joi.array(),
  }),
});

export default function ValidateUpdateMessage(
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
