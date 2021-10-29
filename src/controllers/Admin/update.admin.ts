import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

export default async function UpdateAdmin(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: any;
    password: string;
  };
  const ID = Types.ObjectId(id);

  let password = '';

  if (updates?.password) {
    password = updates.password;
  }

  delete updates.password;

  const doc = await models.Admin.findOneAndUpdate(
    { _id: ID },
    updates,
    { new: true },
  ).select({
    hash: 0,
    salt: 0,
  });

  if (password) {
    doc?.setPassword(password);
  }
  doc?.save();
  const Activity = new models.Activities({
    group: '',
    userType: ACCOUNT_TYPE.ADMIN_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.ADMIN,
    type: EntitiesAction.UPDATE,
    description: 'Admin account updated',
    payload: {
      name: doc?.name,
      email: doc?.email,
      id: doc?._id, // eslint-disable-line
    },
    date: Date.now(),
  });
  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.AdminNotFound,
    );

  await Activity.save();
  return ProcessingSuccess(res, doc);
}
