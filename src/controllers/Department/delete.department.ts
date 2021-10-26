import { Request, Response } from 'express';
import { Types } from 'mongoose';
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
  const formatIds: Types.ObjectId[] = [];
  groupIds.forEach((id: string) => {
    formatIds.push(Types.ObjectId(id));
  });

  const doc = await models.Department.deleteMany({
    _id: { $in: formatIds },
  });

  return ProcessingSuccess(res, doc);
}
