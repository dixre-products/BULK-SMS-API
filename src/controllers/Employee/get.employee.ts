import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';

export async function GetAllEmployee(req: Request, res: Response) {
  const doc = await models.Employee.find().populate('groupId roleId');

  if (!doc) return ResourceNotFound(res, 'Employee not found');

  return ProcessingSuccess(res, doc);
}

export async function GetSingleEmployee(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Employee.find({ _id: id }).populate(
    'roleId groupId',
  );

  if (!doc)
    return ResourceNotFound(
      res,
      'Employee not found with corresponding id',
    );

  return ProcessingSuccess(res, doc);
}
