import { Request, Response } from 'express';

import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function GetAllMessages(req: Request, res: Response) {
  const doc = await models.Message.find();

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.MessageNotFound,
    );

  return ProcessingSuccess(res, doc);
}

export async function GetMessageByGroup(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Message.find({ groupId: id });

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.MessageNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}
