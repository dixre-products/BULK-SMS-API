import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';

export async function GetAllDepartment(req: Request, res: Response) {
  const doc = await models.Department.find();

  if (!doc) return ResourceNotFound(res, 'User not found');

  return ProcessingSuccess(res, doc);
}

export async function GetSingleDepartment(
  req: Request,
  res: Response,
) {
  const { id } = req.params;

  const doc = await models.Department.findOne({ _id: id });

  if (!doc)
    return ResourceNotFound(
      res,
      'Department not found with corresponding id',
    );

  return ProcessingSuccess(res, doc);
}
