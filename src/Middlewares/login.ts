import { Request, Response, NextFunction } from 'express';
import { getPhoneNumberInfo } from '../utills/utills';
import {
  UnVerifiedAccount,
  InvalidCredential,
} from '../RequestStatus/status';
import models from '../models/index';
// checks if user tried to login with an unverified account
export async function HandleUnverifiedAccount(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { phoneNumber, countryCode } = req.body as {
    phoneNumber: string;
    countryCode: string;
  };

  const intlFormat: string = await getPhoneNumberInfo(
    phoneNumber,
    countryCode,
  );

  res.locals.phoneNumber = intlFormat;

  const getUser = await models.Users.findOne({
    phoneNumber: intlFormat,
  });

  if (getUser) {
    if (!getUser.isVerified) {
      return UnVerifiedAccount(res);
    }
    next();
  } else {
    return InvalidCredential(res);
  }
}

export function Fix() {}
