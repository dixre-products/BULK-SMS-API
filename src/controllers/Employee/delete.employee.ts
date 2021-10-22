import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function DeleteMultipleEmployee(
  req: Request,
  res: Response,
) {
  const { employeeIds } = req.body as {
    employeeIds: string[];
  };

  /* eslint-disable */
  for (const ids of employeeIds) {
    const ID = Types.ObjectId(ids);

    const Exist = await models.Employee.findOne({ _id: ID });
    if (!Exist)
      return ResourceNotFound(
        res,
        constants.RequestResponse.EmployeeNotFoundWithId,
      );
  }
  /* eslint-enable */

  const doc = await models.Employee.deleteMany({
    _id: { $in: employeeIds },
  });

  return ProcessingSuccess(res, doc);
}
