import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';

export async function GetAllContact(req: Request, res: Response) {
  const doc = await models.Contact.find();

  if (!doc) return ResourceNotFound(res, 'Contacts not found');

  return ProcessingSuccess(res, doc);
}

export async function GetSingleContactByGroup(
  req: Request,
  res: Response,
) {
  const { id } = req.params;

  const doc = await models.Contact.find({ groupId: id });

  if (!doc)
    return ResourceNotFound(
      res,
      'Contact not found with corresponding id',
    );

  return ProcessingSuccess(res, doc);
}
