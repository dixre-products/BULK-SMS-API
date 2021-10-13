import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';

export default async function DeleteContact(
  req: Request,
  res: Response,
) {
  const { id } = req.params;

  const doc = await models.Contact.findOneAndDelete({ _id: id });
  if (!doc)
    return ResourceNotFound(
      res,
      'Contact not found with corresponding id',
    );

  return ProcessingSuccess(res, doc);
}
