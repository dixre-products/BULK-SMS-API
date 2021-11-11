import { Request, Response } from 'express';
import { ProcessingGetRequestSuccess } from '../../RequestStatus/status';
// import models from '../../models';
// import { getQuery } from '../../utills/utills';

export default async function AllActivity(
  req: Request,
  res: Response,
) {
  const requestParams = req.query as any; // eslint-disable-line
  // console.log(requestParams);
  // const { paginationConfig, paginationQuery } = getQuery(
  //   requestParams,
  //   {
  //     uid: '',
  //     agency: 'group',
  //     roles: 'roleId',
  //     userType: 'userType',
  //   },
  // );

  // const doc = await models.Activities.paginate(
  //   { ...paginationQuery },
  //   {
  //     ...paginationConfig,
  //     populate: 'user admin',
  //     sort: { date: -1 },
  //   },
  // );

  return ProcessingGetRequestSuccess(res, {
    payload: [],
    totalDoc: 0,
    totalPages: 1,
  });
}
