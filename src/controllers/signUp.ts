import { Request, Response } from 'express';
import { SignUpSuccess } from '../RequestStatus/status';
import models from '../models/index';
import { SignUpProps } from '../Types/interfaces';

// the middleware handles lot of stuffs that should have been done here
export async function SignUp(req: Request, res: Response) {
  // get validated data from req coming from the middleware

  const userVerifiedPhoneNumber = res.locals.phoneNumber;
  const phoneNumberInternational = userVerifiedPhoneNumber as string;
  const {
    password,
    firstName,
    lastName,
    sex,
    phoneNumber,
  } = req.body as SignUpProps;

  // create user,generate password and token
  const user = new models.Users();

  user.phoneNumber = phoneNumberInternational;

  user.localPhoneNumber = phoneNumber;

  user.firstName = firstName;

  user.lastName = lastName;

  /* eslint-disable */
  user.userId = user._id;
  /* eslint-enable */

  user.setPassword(password);

  user.setSex(sex);

  const { userId } = user;

  await user.save({ validateBeforeSave: false });

  const createdUser = await models.Users.findOne({
    userId,
  }).select({
    hash: 0,
    salt: 0,
    /* eslint-disable */
    _v: 0,
    _id: 0,
    /* eslint-enable */
    loginAttempts: 0,
    attemptsDuration: 0,
    tillUnlocked: 0,
  });

  return SignUpSuccess(res, createdUser);
}

export function Fix() {}
