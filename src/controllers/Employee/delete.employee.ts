import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function DeleteMultipleEmployee(
  req: Request,
  res: Response,
) {
  const { employeeIds } = req.body as {
    employeeIds: string[];
  };

  const doc = await models.Employee.deleteMany({
    _id: { $in: employeeIds },
  });

  return ProcessingSuccess(res, doc);
}
