import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function DeleteContact(
  req: Request,
  res: Response,
) {
  const { id } = req.params;

  const doc = await models.Contact.deleteOne({ _id: id });

  return ProcessingSuccess(res, doc);
}
