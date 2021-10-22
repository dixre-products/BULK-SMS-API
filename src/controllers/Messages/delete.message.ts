import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function DeleteMessage(req: Request, res: Response) {
  console.log(req.params, req.query);
  console.log(
    '**************************************************************************',
  );
  const { id } = req.params;

  const deletedDoc = await models.Message.findOneAndDelete({
    _id: id,
  });

  await models.Department.findOneAndUpdate(
    { _id: deletedDoc?.groupId },
    {
      $inc: { credit: deletedDoc?.contacts.length },
    },
    { new: true },
  );

  return ProcessingSuccess(res, deletedDoc);
}

export async function DeleteMultipleMessage(
  req: Request,
  res: Response,
) {
  const { messageIds } = req.body as {
    messageIds: string[];
  };

  /* eslint-disable */
  for (const ids of messageIds) {
    const ID = Types.ObjectId(ids);

    const Exist = await models.Message.findOne({ _id: ID });
    if (!Exist)
      return ResourceNotFound(
        res,
        constants.RequestResponse.MessageNotFoundWithId,
      );
  }
  /* eslint-enable */

  const doc = await models.Message.deleteMany({
    _id: { $in: messageIds },
  });

  return ProcessingSuccess(res, doc);
}
