import { Request, Response } from 'express';

import {
  ProcessingGetRequestSuccess,
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';
import { getQuery } from '../../utills/utills';

export async function GetAllMessages(req: Request, res: Response) {
  const requestParams = req.query as any;
  const { paginationConfig, paginationQuery } = getQuery(
    requestParams,
    {
      uid: '',
      agency: 'groupId',
      roles: '',
    },
  );

  const doc = await models.Message.paginate(paginationQuery, {
    ...paginationConfig,
    select: {
      hash: 0,
      salt: 0,
    },
  });

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.ContactNotFound,
    );

  return ProcessingGetRequestSuccess(res, {
    payload: doc.docs,
    totalDoc: doc.totalDocs,
    totalPages: doc.totalPages,
  });
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
