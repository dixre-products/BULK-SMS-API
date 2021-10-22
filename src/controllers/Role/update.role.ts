import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import { RoleProps } from '../../Types/interfaces';
import constants from '../../constants';

export default async function UpdateRole(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: RoleProps;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Role.findOneAndUpdate(
    { _id: ID },
    updates,
    {
      new: true,
    },
  );

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.RoleNotFound,
    );

  return ProcessingSuccess(res, doc);
}
