import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import { ContactProps } from '../../Types/interfaces';

export default async function UpdateContact(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: ContactProps;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Contact.findOneAndUpdate(
    { _id: ID },
    updates,
    { new: true },
  );

  if (!doc) return ResourceNotFound(res, 'Contact not Found ');

  return ProcessingSuccess(res, doc);
}
