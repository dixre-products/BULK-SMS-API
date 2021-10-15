import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function GetAllRole(req: Request, res: Response) {
  const doc = await models.Role.find();

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.RoleNotFound,
    );

  return ProcessingSuccess(res, doc);
}

export async function GetSingleRole(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Role.findOne({ _id: id });

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.RoleNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}
