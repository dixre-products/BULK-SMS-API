import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { SenderIds } from '../../Types/interfaces';

export default async function CreateSenderID(
  req: Request,
  res: Response,
) {
  const { name, senderIds } = req.body as {
    name: string;
    senderIds: any[];
  };

  const senderID = new models.SenderIDs() as SenderIds;

  senderID.name = name;
  senderID.senderIds = senderIds;

  await senderID.save({
    validateBeforeSave: false,
  });

  return ProcessingSuccess(res, senderID);
}
