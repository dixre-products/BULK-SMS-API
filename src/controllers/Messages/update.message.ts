import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import { MessageProps } from '../../Types/interfaces';

export default async function UpdateMessage(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: MessageProps;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Message.findOneAndUpdate(ID, updates);

  if (!doc) return ResourceNotFound(res, 'Message not Found ');

  return ProcessingSuccess(res, doc);
}
