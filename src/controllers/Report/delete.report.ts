import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export async function DeleteReport(req: Request, res: Response) {
  const { id } = req.params;

  const doc = await models.Reports.deleteOne({ _id: id });
  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.ReportNotFoundWithId,
    );

  return ProcessingSuccess(res, doc);
}

export async function DeleteMultipleReports(
  req: Request,
  res: Response,
) {
  const { reportIds } = req.body as {
    reportIds: string[];
  };
  // console.log('req contacts', contactIds);

  /* eslint-disable */
  for (const ids of reportIds) {
    const ID = Types.ObjectId(ids);

    const Exist = await models.Reports.findOne({ _id: ID });
    if (!Exist)
      return ResourceNotFound(
        res,
        constants.RequestResponse.ReportNotFoundWithId,
      );
  }
  /* eslint-enable */

  const doc = await models.Reports.deleteMany({
    _id: { $in: reportIds },
  });

  return ProcessingSuccess(res, doc);
}
