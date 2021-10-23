import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function DeleteMultipleAdmin(
  req: Request,
  res: Response,
) {
  const { adminIds } = req.body as {
    adminIds: string[];
  };

  /* eslint-enable */

  const doc = await models.Admin.deleteMany({
    _id: { $in: adminIds },
  });

  return ProcessingSuccess(res, doc);
}
