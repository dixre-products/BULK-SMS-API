import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { ContactProps } from '../../Types/interfaces';

export default async function CreateContact(
  req: Request,
  res: Response,
) {
  const { name, number } = req.body as {
    name: string;
    number: number;
  };

  // const $UID = Types.ObjectId(groupId);
  const contact = new models.Contact() as ContactProps;

  contact.name = name;
  contact.number = number;

  await contact.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, contact);
}
