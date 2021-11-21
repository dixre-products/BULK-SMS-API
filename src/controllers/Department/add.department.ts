import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

export default async function CreateDepartment(
  req: Request,
  res: Response,
) {
  const { name, credit, senderIds } = req.body as {
    name: string;
    credit: number;
    senderIds: string[];
  };

  const department = new models.Department();

  // ACTIVITY LOGGER
  // ===============================================
  const Activity = new models.Activities({
    group: '',
    userType: ACCOUNT_TYPE.ADMIN_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.DEPARTMENTS,
    type: EntitiesAction.CREATE,
    description: 'New Department created',
    payload: {
      name,
      id: department._id, // eslint-disable-line
    },
    date: new Date(),
  });

  const formatSenderIds: any[] = [];

  if (senderIds) {
    senderIds.forEach((val) => {
      formatSenderIds.push(mongoose.Types.ObjectId(val));
    });
  }
  department.name = name;
  department.credit = credit;
  department.senderIds = formatSenderIds;
  const doc = department.populate('senderIds');

  await department.save({ validateBeforeSave: false });
  await Activity.save({ validateBeforeSave: false });
  return ProcessingSuccess(res, doc);
}
