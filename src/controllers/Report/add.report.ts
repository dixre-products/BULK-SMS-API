import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function CreateReport(
  req: Request,
  res: Response,
) {
  const { groupId, employeeId, message } = req.body as {
    groupId: string;
    employeeId: string;
    message: string;
  };

  const $GID = Types.ObjectId(groupId);
  const $EID = Types.ObjectId(employeeId);
  const report = new models.Reports();

  report.message = message;
  report.employeeId = $EID;
  report.groupId = $GID;

  await report.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, report);
}
