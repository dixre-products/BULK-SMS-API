import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import { AdminProps } from '../../Types/interfaces';
import constants from '../../constants';

export default async function UpdateAdmin(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: AdminProps;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Admin.findOneAndUpdate(
    { _id: ID },
    updates,
  ).select({
    hash: 0,
    salt: 0,
    password: 0,
  });

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.AdminNotFound,
    );

  return ProcessingSuccess(res, doc);
}
