import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function GetAllEmployee(req: Request, res: Response) {
  const doc = await models.Employee.find().populate('groupId roleId');

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.EmployeeNotFound,
    );

  return ProcessingSuccess(res, doc);
}

export async function GetSingleEmployee(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Employee.findOne({ _id: id })
    .populate('roleId groupId')
    .select({
      hash: 0,
      salt: 0,
      password: 0,
    });

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.EmployeeNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}
