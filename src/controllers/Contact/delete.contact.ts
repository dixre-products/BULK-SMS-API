import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function DeleteContact(req: Request, res: Response) {
  const { ids } = req.params;

  const doc = await models.Contact.deleteMany({ _id: ids });
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
  console.log('req contacts', contactIds);

  /* eslint-disable */
  for (const ids of contactIds) {
    console.log('b4 convert', ids);
    const ID = Types.ObjectId(ids);
    console.log('converted', ID);

    const contactExist = await models.Contact.findOne({ _id: ID });
    if (!contactExist)
      return ResourceNotFound(
        res,
        constants.RequestResponse.ContactNotFoundWithId,
      );
  }
  /* eslint-enable */

  const doc = await models.Contact.deleteMany({
    _id: { $in: contactIds },
  });

  return ProcessingSuccess(res, doc);
}
