import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../../RequestStatus/status';

const requestBodySchema = joi.object({
  message: joi.string().required().label('Message'),
  sender: joi.string().required().label('Sender'),
  time: joi.date().label('Time'),
  status: joi.string().required().label('Status'),
  groupId: joi.string().label('Group ID'),

  contacts: joi.object({
    number: joi.number(),
    name: joi.string(),
    groupId: joi.string(),
    date: joi.date(),
  }),
});

export default function ValidateCreateMessage(
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
