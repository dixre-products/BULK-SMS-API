import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';

export async function UpdateDepartment(req: Request, res: Response) {
  const { id, updates } = req.body as {
    id: string;
    updates: { name: string; credit: number };
  };

  const ID = Types.ObjectId(id);

  const doc = await models.Department.findOneAndUpdate(
    { _id: ID },
    updates,
    { new: true },
  );

  if (!doc) return ResourceNotFound(res, 'Department not found');

  return ProcessingSuccess(res, doc);
}

export async function UpdateDepartmentCredit(
  req: Request,
  res: Response,
) {
  const { id, credit } = req.body as {
    id: string;
    credit: number;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Department.findOneAndUpdate(
    { _id: ID },
    {
      $inc: { credit },
    },
    { new: true },
  );

  if (!doc) return ResourceNotFound(res, 'Department not found');

  return ProcessingSuccess(res, doc);
}
