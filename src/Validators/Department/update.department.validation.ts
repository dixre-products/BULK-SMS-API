import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../../RequestStatus/status';

const requestBodySchemaCredit = joi.object({
  id: joi.string().required().label('Department ID'),
  credit: joi.number().required().label('credit'),
  senderIds: joi.array().items(joi.string()).optional().allow(),
});

const requestBodySchema = joi.object({
  id: joi.string().required().label('Department ID'),
  updates: joi.object({
    credit: joi.number(),
    name: joi.string(),
  }),
});

export function ValidateUpdateDepartmentCredit(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { error } = requestBodySchemaCredit.validate(req.body, {
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

export function ValidateUpdateDepartment(
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
