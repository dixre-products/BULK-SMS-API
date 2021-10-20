import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function CreateDepartment(
  req: Request,
  res: Response,
) {
  const { name, credit, senderIds } = req.body as {
    name: string;
    credit: number;
    senderIds: string[];
  };

  const department = new models.Department();
  const formatSenderIds: any[] = [];

  senderIds.forEach((val) => {
    formatSenderIds.push(mongoose.Types.ObjectId(val));
  });
  department.name = name;
  department.credit = credit;
  department.senderIds = formatSenderIds;
  const doc = department.populate('senderIds');

  await department.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, doc);
}
