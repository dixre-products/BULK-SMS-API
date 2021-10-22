import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function DeleteMultipleAdmin(
  req: Request,
  res: Response,
) {
  const { adminIds } = req.body as {
    adminIds: string[];
  };

  /* eslint-disable */
  for (const ids of adminIds) {
    const ID = Types.ObjectId(ids);

    const adminExist = await models.Admin.findOne({ _id: ID });
    if (!adminExist)
      return ResourceNotFound(
        res,
        constants.RequestResponse.AdminNotFoundWithId,
      );
  }
  /* eslint-enable */

  const doc = await models.Admin.deleteMany({
    _id: { $in: adminIds },
  });

  return ProcessingSuccess(res, doc);
}
