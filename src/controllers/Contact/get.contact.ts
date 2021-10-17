import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function GetAllContact(req: Request, res: Response) {
  const doc = await models.Contact.find();

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.ContactNotFound,
    );

  return ProcessingSuccess(res, doc);
}

export async function GetContactByGroup(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Contact.find({ groupId: id });

  return ProcessingSuccess(res, doc);
}
