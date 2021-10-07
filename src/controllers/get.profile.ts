import { Request, Response } from 'express';
import {
  ResourceNotFound,
  ProcessingSuccess,
} from '../RequestStatus/status';
import models from '../models';

export default async function GetProfileInformation(
  req: Request,
  res: Response,
) {
  const { uid } = req.params;

  const doc = await models.Users.findOne({ userId: uid }).select({
    hash: 0,
    salt: 0,
    /* eslint-disable */
    _v: 0,
    _id: 0,
    /* eslint-enable */
    loginAttempts: 0,
    attemptsDuration: 0,
    tillUnlocked: 0,
  });

  if (!doc)
    return ResourceNotFound(
      res,
      'User not found with corresponding id',
    );

  return ProcessingSuccess(res, doc);
}
