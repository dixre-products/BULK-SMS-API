import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function GetAllAdmin(req: Request, res: Response) {
  const doc = await models.Admin.find().select({
    hash: 0,
    salt: 0,
  });

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.AdminNotFound,
    );

  return ProcessingSuccess(res, doc);
}

export async function GetSingleAdmin(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Admin.findOne({ _id: id }).select({
    hash: 0,
    salt: 0,
    password: 0,
  });

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.AdminNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}
