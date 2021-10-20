import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function DeleteMessage(
  req: Request,
  res: Response,
) {
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
