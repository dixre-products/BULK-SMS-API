import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function DeleteMultipleDepartment(
  req: Request,
  res: Response,
) {
  const { groupIds } = req.body as {
    groupIds: string[];
  };

  /* eslint-disable */
  for (const ids of groupIds) {
    const ID = Types.ObjectId(ids);

    const groupExist = await models.Department.findOne({ _id: ID });
    if (!groupExist)
      return ResourceNotFound(
        res,
        constants.RequestResponse.DepartmentNotFoundWithId,
      );
  }
  /* eslint-enable */

  const doc = await models.Department.deleteMany({
    _id: { $in: groupIds },
  });

  return ProcessingSuccess(res, doc);
}
