import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { MessageProps } from '../../Types/interfaces';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

export default async function UpdateMessage(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: MessageProps;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Message.findOneAndUpdate(
    { _id: ID },
    updates,
  );

  // ACTIVITY LOGGER
  // ============================

  const Activity = new models.Activities({
    group: res.locals.groupId,
    userType: ACCOUNT_TYPE.AGENCY_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.MESSAGES,
    type: EntitiesAction.UPDATE,
    description: 'Message updated',
    payload: {
      message: doc?.message,
      phoneNumbers: doc?.contacts,
      time: doc?.time,
      id: doc?._id, // eslint-disable-line
    },
    date: Date.now(),
  });

  await Activity.save();

  return ProcessingSuccess(res, doc);
}
