import { Request, Response, NextFunction } from 'express';
import { getPhoneNumberInfo } from '../utills/utills';
import { UserExist } from '../RequestStatus/status';
import models from '../models/index';

// checks if user tried to signup with an existing unverified account then delete the account and proceed with the signup
export async function HandleDuplicateSignUpMiddleWare(
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
    if (getUser.isVerified) {
      return UserExist(res);
    }
    await models.Users.deleteMany({
      phoneNumber: intlFormat,
    });
    next();
  } else {
    next();
  }
}

export function Fix() {}
