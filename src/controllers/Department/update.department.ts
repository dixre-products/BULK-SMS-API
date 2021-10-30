import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

export async function UpdateDepartment(req: Request, res: Response) {
  const { id, updates } = req.body as {
    id: string;
    updates: { name: string; credit: number; senderIds: any[] };
  };

  const ID = Types.ObjectId(id);
  if (updates.senderIds) {
    const formattedIDS: Types.ObjectId[] = [];
    updates.senderIds.forEach((senderId: any) => {
      formattedIDS.push(Types.ObjectId(senderId));
    });
    updates.senderIds = formattedIDS;
  }

  const doc = await models.Department.findOneAndUpdate(
    { _id: ID },
    updates,
    { new: true },
  );

  // ACTIVITY LOGGER
  // ============================

  const Activity = new models.Activities({
    group: '',
    userType: ACCOUNT_TYPE.ADMIN_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.DEPARTMENTS,
    type: EntitiesAction.UPDATE,
    description: 'Department updated',
    payload: {
      name: doc?.name,
      id: doc?._id, // eslint-disable-line
    },
    date: Date.now(),
  });

  await Activity.save({ validateBeforeSave: false });

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

  // ACTIVITY LOGGER
  // ============================

  const Activity = new models.Activities({
    group: '',
    userType: ACCOUNT_TYPE.ADMIN_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.DEPARTMENTS,
    type: EntitiesAction.UPDATE,
    description: 'SMS added to agency',
    payload: {
      name: doc?.name,
      id: doc?._id, // eslint-disable-line
    },
    date: Date.now(),
  });

  await Activity.save();

  return ProcessingSuccess(res, doc);
}
