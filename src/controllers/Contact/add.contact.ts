import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { ContactProps } from '../../Types/interfaces';

export default async function CreateContact(
  req: Request,
  res: Response,
) {
  const { name, number, groupId } = req.body as {
    groupId: string;
    name: string;
    number: number;
  };

  const $UID = Types.ObjectId(groupId);
  const contact = new models.Contact() as ContactProps;

  contact.number = number;
  contact.name = name;
  contact.groupId = $UID;

  await contact.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, contact);
}
