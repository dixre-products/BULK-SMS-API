import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  RequestNotAllowed,
} from '../../RequestStatus/status';
import models from '../../models';
import { MessageProps } from '../../Types/interfaces';
import MessageStatus, {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';
import { MessageService } from '../../utills/utills';

export default async function UpdateMessage(
  req: Request,
  res: Response,
) {
  const { id, updates } = req.body as {
    id: string;
    updates: MessageProps;
  };
  const ID = Types.ObjectId(id);

  const getMessage = await models.Message.findOne({ _id: ID }); // eslint-disable-line
  if (getMessage?.status !== MessageStatus.PENDING)
    return RequestNotAllowed(res);
  const doc = await models.Message.findOneAndUpdate(
    { _id: ID }, // eslint-disable-line
    updates,
    { new: true },
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
    date: new Date(),
  });

  await Activity.save();

  return ProcessingSuccess(res, doc);
}

export async function SendMessage(req: Request, res: Response) {
  const { id } = req.body as {
    id: string;
  };
  const ID = Types.ObjectId(id);

  const getMessage = await models.Message.findOne({ _id: ID }); // eslint-disable-line

  if (getMessage?.status !== MessageStatus.PENDING)
    return RequestNotAllowed(res);

  const messageString = getMessage.message;
  if (!getMessage.scheduleDate) {
    await MessageService(getMessage.contacts, messageString);
  }

  const doc = await models.Message.findOneAndUpdate(
    { _id: ID }, // eslint-disable-line
    {
      status: !getMessage.scheduleDate
        ? MessageStatus.SENT
        : MessageStatus.APPROVED,
    },
    {
      new: true,
    },
  ).populate('groupId');

  await models.Department.findOneAndUpdate(
    {
      _id: getMessage.groupId, // eslint-disable
    },
    {
      $inc: { credit: -(getMessage.contacts.length * 4) },
    },
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
    description: getMessage.scheduleDate
      ? 'Message approved by checker'
      : 'Message approved by checker and sent',
    payload: {
      message: doc?.message,
      phoneNumbers: doc?.contacts,
      time: doc?.time,
      id: doc?._id, // eslint-disable-line
    },
    date: new Date(),
  });

  await Activity.save();

  return ProcessingSuccess(res, doc);
}
