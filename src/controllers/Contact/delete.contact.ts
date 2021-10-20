import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function DeleteContact(
  req: Request,
  res: Response,
) {
  const { ids } = req.params;

  const doc = await models.Contact.deleteMany({ _id: ids });
  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.ContactNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}
