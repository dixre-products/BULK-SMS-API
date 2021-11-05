import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  UserExist,
} from '../../RequestStatus/status';
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
  // COLLECT REQUEST BODY
  // ==============================
  const { email, name, password } = req.body as {
    email: string;
    name: string;
    password: string;
  };

  // CHECKS IF ACCOUNT ALREADY EXIST
  const findAccount = await models.Admin.findOne({
    email: email.toLowerCase(),
  });

  if (findAccount) return UserExist(res);

  const admin = new models.Admin({
    email: email.toLowerCase(),
    name,
  }); // INTIALIZE A NEW ADMIN OBJECT

  admin.setPassword(password); // SET NEW ADMIN PASSWORD

  // ACTIVITY LOGGER
  // ===============================================
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

  await admin.save({ validateBeforeSave: false }); // WRITE NEW ADMIN TO DB

  // GET NEW ACCOUNT CREATED
  const createdAdmin = await models.Admin.findOne({
    _id: admin._id, // eslint-disable-line
  }).select({
    hash: 0,
    salt: 0,
  });

  await Activity.save(); // SAVE  ACTIVITY  LOG
  return ProcessingSuccess(res, createdAdmin); // RESPONSE SUCCESS WITH NEW ADMIN
}
