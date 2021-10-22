import { Request, Response } from 'express';
import {
  LoginSuccess,
  InvalidCredential,
} from '../../RequestStatus/status';
import models from '../../models';
import { getTokens } from '../../utills/utills';
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

  return LoginSuccess(
    res,
    tokens.accessToken,
    tokens.refreshToken,
    responseObj,
  );
}
