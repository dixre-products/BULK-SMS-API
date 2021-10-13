import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';

export default async function UpdateAdmin(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: any;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Admin.findOneAndUpdate(
    { _id: ID },
    updates,
  );

  if (!doc) return ResourceNotFound(res, 'Admin not Found ');

  return ProcessingSuccess(res, doc);
}
