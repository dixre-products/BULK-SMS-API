import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function DeleteContact(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Contact.findOneAndDelete({ _id: id });
  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.ContactNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}

export async function DeleteMultipleContacts(
  req: Request,
  res: Response,
) {
  const { contactIds } = req.body as {
    contactIds: string[];
  };

  /* eslint-enable */

  const doc = await models.Contact.deleteMany({
    _id: { $in: contactIds },
  });

  return ProcessingSuccess(res, doc);
}
