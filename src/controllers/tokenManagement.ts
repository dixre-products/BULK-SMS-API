import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  InvalidCredential,
} from '../RequestStatus/status';
import { decodeJwtToken, getTokens } from '../utills/utills';
import { UserProps } from '../Types/interfaces';

export async function RefreshAccessToken(
  req: Request,
  res: Response,
) {
  const { refreshToken } = req.body;
  try {
    const payload = decodeJwtToken(refreshToken) as UserProps; // throws error if not valid
    const tokens = getTokens(payload);
    return ProcessingSuccess(res, {
      accessToken: tokens.accessToken,
    });
  } catch (e) {
    return InvalidCredential(res);
  }
}

export function Fix() {}
