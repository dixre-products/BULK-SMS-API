import { Response, Request } from 'express';
import {
  ProcessingSuccess,
  UnAuthorized,
} from '../RequestStatus/status';
import { decodeJwtToken } from '../utills/utills';
import models from '../models/index';
// import { UserProps } from '../Types/interfaces';

require('dotenv/config');

export default async function RessetPassword(
  req: Request,
  res: Response,
) {
  const { password, accessToken } = req.body as {
    password: string;
    accessToken: string;
  };

  let decode: any;

  try {
    decode = decodeJwtToken(accessToken) as any;
  } catch (e) {
    return UnAuthorized(res);
  }

  const { userId } = decode;

  const getDoc = await models.Users.findOne({
    userId: userId.userId,
  });

  if (!getDoc) return UnAuthorized(res);

  getDoc.setPassword(password);

  await getDoc.save();

  return ProcessingSuccess(res, {});
}
