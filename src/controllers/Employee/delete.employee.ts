import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function DeleteMultipleEmployee(
  req: Request,
  res: Response,
) {
  const { employeeIds } = req.body as {
    employeeIds: string[];
  };

  const formatIds: Types.ObjectId[] = [];
  employeeIds.forEach((id: string) => {
    formatIds.push(Types.ObjectId(id));
  });

  const doc = await models.Employee.deleteMany({
    _id: { $in: formatIds },
  });

  return ProcessingSuccess(res, doc);
}
