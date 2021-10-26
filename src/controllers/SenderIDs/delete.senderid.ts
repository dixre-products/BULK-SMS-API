import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function DeleteSenderId(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.SenderIDs.findOneAndDelete({ _id: id });
  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.ContactNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}

export async function DeleteMultipleSenders(
  req: Request,
  res: Response,
) {
  const { senderIds } = req.body as {
    senderIds: string[];
  };
  const formatIds: Types.ObjectId[] = [];
  senderIds.forEach((id: string) => {
    formatIds.push(Types.ObjectId(id));
  });

  const doc = await models.SenderIDs.deleteMany({
    _id: { $in: formatIds },
  });

  return ProcessingSuccess(res, doc);
}
