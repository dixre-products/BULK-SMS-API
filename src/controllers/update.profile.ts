import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  UserDoesNotExist,
} from '../RequestStatus/status';
import models from '../models';
import { UserProps } from '../Types/interfaces';

export default async function UpdateUserProfile(
  req: Request,
  res: Response,
) {
  const { userId, updates } = req.body as {
    userId: string;
    updates: UserProps;
  };

  const $UID = new Types.ObjectId(userId);
  const $user = await models.Users.findByIdAndUpdate($UID, updates);

  if (!$user) return UserDoesNotExist(res);

  return ProcessingSuccess(res, $user);
}
