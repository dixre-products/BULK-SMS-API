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

  /* eslint-disable */
  for (const ids of senderIds) {
    const ID = Types.ObjectId(ids);

    const Exist = await models.SenderIDs.findOne({ _id: ID });
    if (!Exist)
      return ResourceNotFound(
        res,
        constants.RequestResponse.RoleNotFoundWithId,
      );
  }
  /* eslint-enable */

  const doc = await models.SenderIDs.deleteMany({
    _id: { $in: senderIds },
  });

  return ProcessingSuccess(res, doc);
}
