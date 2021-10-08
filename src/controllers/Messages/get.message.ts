import { Request, Response } from 'express';
// import { ObjectId, Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';

export async function GetAllMessages(req: Request, res: Response) {
  const doc = await models.Message.find();

  if (!doc) return ResourceNotFound(res, 'Messages not found');

  return ProcessingSuccess(res, doc);
}

export async function GetSingleMessageByGroup(
  req: Request,
  res: Response,
) {
  const { id } = req.params;

  const doc = await models.Message.find({ groupId: id });

  if (!doc)
    return ResourceNotFound(
      res,
      'Message not found with corresponding group id',
    );

  return ProcessingSuccess(res, doc);
}
