import { Request, Response } from 'express';
import {
  ProcessingGetRequestSuccess,
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';
import { getQuery } from '../../utills/utills';

export async function GetAllRole(req: Request, res: Response) {
  const requestParams = req.query as any;
  const { paginationConfig, paginationQuery } = getQuery(
    requestParams,
    {
      uid: '',
      agency: '',
      roles: '',
    },
  );

  const doc = await models.Role.paginate(paginationQuery, {
    ...paginationConfig,
    sort: { date: -1 },
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

export async function GetSingleRole(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Role.findOne({ _id: id });

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.RoleNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}
