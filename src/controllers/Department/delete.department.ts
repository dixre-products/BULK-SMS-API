import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function DeleteMultipleDepartment(
  req: Request,
  res: Response,
) {
  const { groupIds } = req.body as {
    groupIds: string[];
  };

  /* eslint-disable */

  const doc = await models.Department.deleteMany({
    _id: { $in: groupIds },
  });

  return ProcessingSuccess(res, doc);
}
