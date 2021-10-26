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
  const formatIds: Types.ObjectId[] = [];
  reportIds.forEach((id: string) => {
    formatIds.push(Types.ObjectId(id));
  });

  const doc = await models.Reports.deleteMany({
    _id: { $in: formatIds },
  });

  return ProcessingSuccess(res, doc);
}
