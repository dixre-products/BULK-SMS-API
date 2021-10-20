import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function GetSenderIDs(
  req: Request,
  res: Response,
) {
  const doc = await models.SenderIDs.find();

  return ProcessingSuccess(res, doc);
}
