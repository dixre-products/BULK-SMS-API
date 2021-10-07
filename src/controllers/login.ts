import { Request, Response } from 'express';
import {
  LoginSuccess,
  InvalidCredential,
  SuspendUser,
} from '../RequestStatus/status';
import models from '../models';
import { getTokens } from '../utills/utills';
import { UserProps } from '../Types/interfaces';

// the middlewares handle most of the checks that should have been done here
export async function loginAccount(req: Request, res: Response) {
  const formattedPhoneNumber = res.locals.phoneNumber;
  const phoneNumber = formattedPhoneNumber as string;
  const { password } = req.body as {
    password: string;
  };

  const doc = await models.Users.findOne({ phoneNumber }).select({
    salt: 0,
    /* eslint-disable */
    _v: 0,
    _id: 0,
    /* eslint-enable */
    loginAttempts: 0,
    attemptsDuration: 0,
    tillUnlocked: 0,
  });

  if (!doc) return InvalidCredential(res);

  // return forbiddend user suspended as error if acount is locked due to incorrect login attemps
  if (doc.isAccountLocked()) return SuspendUser(res);

  if (doc.validatePassword(password)) {
    // credentials successful login
    const tokens = getTokens(doc.toObject() as UserProps);

    return LoginSuccess(
      res,
      tokens.accessToken,
      tokens.refreshToken,
      doc,
    );
  }

  await doc.lockAccount();

  return InvalidCredential(res);
}

export function Fix() {}
