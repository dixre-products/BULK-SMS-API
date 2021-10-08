import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';

export async function GetAllRole(req: Request, res: Response) {
  const doc = await models.Role.find();

  if (!doc) return ResourceNotFound(res, 'Role not found');

  return ProcessingSuccess(res, doc);
}

export async function GetSingleRole(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Role.find({ _id: id });

  if (!doc)
    return ResourceNotFound(
      res,
      'Role not found with corresponding id',
    );

  return ProcessingSuccess(res, doc);
}
