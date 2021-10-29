import { Request, Response } from 'express';
import {
  LoginSuccess,
  InvalidCredential,
} from '../../RequestStatus/status';
import models from '../../models';
import { getTokens } from '../../utills/utills';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

// the middlewares handle most of the checks that should have been done here
export default async function loginAccount(
  req: Request,
  res: Response,
) {
  const { email, password } = req.body as {
    password: string;
    email: string;
  };
  const doc = await models.Admin.findOne({
    email: email.toLowerCase(),
  });

  if (!doc) return InvalidCredential(res);
  if (!doc.validatePassword(password)) return InvalidCredential(res);

  // credentials successful login
  const responseObj: any = doc.toObject();
  delete responseObj.hash;
  delete responseObj.salt;
  delete responseObj.__v; //eslint-disable-line

  const tokens = getTokens({ ...responseObj, isAdmin: true } as any);
  const Activity = new models.Activities({
    group: '',
    userType: ACCOUNT_TYPE.ADMIN_ACCOUNT,
    admin: responseObj._id, // eslint-disable-line
    user: responseObj._id, // eslint-disable-line
    entity: Entities.ADMIN,
    type: EntitiesAction.LOGIN,
    description: 'Admin logged into account!!',
    payload: {
      name: doc?.name,
      email: doc?.email,
      id: doc?._id, // eslint-disable-line
    },
    date: Date.now(),
  });
  await Activity.save();
  return LoginSuccess(
    res,
    tokens.accessToken,
    tokens.refreshToken,
    responseObj,
  );
}
