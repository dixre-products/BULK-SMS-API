import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function UpdateAdmin(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: any;
    password: string;
  };
  const ID = Types.ObjectId(id);

  let password = '';

  if (updates?.password) {
    password = updates.password;
  }

  delete updates.password;

  const doc = await models.Admin.findOneAndUpdate(
    { _id: ID },
    updates,
  ).select({
    hash: 0,
    salt: 0,
  });

  if (password) {
    doc?.setPassword(password);
  }
  doc?.save();

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.AdminNotFound,
    );

  return ProcessingSuccess(res, doc);
}
