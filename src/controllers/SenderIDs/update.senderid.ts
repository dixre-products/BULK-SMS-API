import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import { SenderIds } from '../../Types/interfaces';
import constants from '../../constants';

export default async function UpdateSenderId(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: SenderIds;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.SenderIDs.findOneAndUpdate(
    { _id: ID },
    updates,
    { new: true },
  );

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.ContactNotFound,
    );

  return ProcessingSuccess(res, doc);
}
