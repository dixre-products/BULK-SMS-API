import { Request, Response } from 'express';
import {
  ProcessingGetRequestSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import { getQuery } from '../../utills/utills';
import constants from '../../constants';

export default async function GetSenderIDs(
  req: Request,
  res: Response,
) {
  const requestParams = req.query as any;
  const { paginationConfig, paginationQuery } = getQuery(
    requestParams,
    {
      uid: '',
      agency: '',
      roles: '',
    },
  );

  const doc = await models.SenderIDs.paginate(paginationQuery, {
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
