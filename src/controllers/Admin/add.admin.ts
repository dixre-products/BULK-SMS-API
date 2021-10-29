import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

export default async function CreateAdmin(
  req: Request,
  res: Response,
) {
  const { email, name, password } = req.body as {
    email: string;
    name: string;
    password: string;
  };

  const admin = new models.Admin();
  const Activity = new models.Activities({
    group: '',
    userType: ACCOUNT_TYPE.ADMIN_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.ADMIN,
    type: EntitiesAction.CREATE,
    description: 'New Admin account created',
    payload: {
      name,
      email,
      id: admin._id, // eslint-disable-line
    },
    date: Date.now(),
  });

  admin.setPassword(password);

  admin.name = name;
  admin.email = email;

  await admin.save({ validateBeforeSave: false });
  const id = admin._id; //eslint-disable-line
  const createdAdmin = await models.Admin.findOne({
    _id: id,
  }).select({
    hash: 0,
    salt: 0,
  });

  await Activity.save();
  return ProcessingSuccess(res, createdAdmin);
}
