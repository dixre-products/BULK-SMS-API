import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function DeleteMultipleAdmin(
  req: Request,
  res: Response,
) {
  const { adminIds } = req.body as {
    adminIds: string[];
  };
  const formatIds: Types.ObjectId[] = [];
  adminIds.forEach((id: string) => {
    formatIds.push(Types.ObjectId(id));
  });

  /* eslint-enable */

  const doc = await models.Admin.deleteMany({
    _id: { $in: formatIds },
  });

  return ProcessingSuccess(res, doc);
}
