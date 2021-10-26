import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

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

  const formatIds: Types.ObjectId[] = [];
  messageIds.forEach((id: string) => {
    formatIds.push(Types.ObjectId(id));
  });

  const doc = await models.Message.deleteMany({
    _id: { $in: formatIds },
  });

  return ProcessingSuccess(res, doc);
}
