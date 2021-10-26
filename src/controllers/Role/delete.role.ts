import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function DeleteRole(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Role.findOneAndDelete({ _id: id });
  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.RoleNotFound,
    );
  return ProcessingSuccess(res, doc);
}

export async function DeleteMultipleRole(
  req: Request,
  res: Response,
) {
  const { roleIds } = req.body as {
    roleIds: string[];
  };

  const formatIds: Types.ObjectId[] = [];
  roleIds.forEach((id: string) => {
    formatIds.push(Types.ObjectId(id));
  });

  const doc = await models.Role.deleteMany({
    _id: { $in: formatIds },
  });

  return ProcessingSuccess(res, doc);
}
