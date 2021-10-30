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

export default async function Createmessage(
  req: Request,
  res: Response,
) {
  const { contacts, message, sender, time, status, groupId } =
    req.body as {
      message: string;
      sender: string;
      groupId: string;
      contacts: string[];
      time: Date;
      status: any;
    };

  const $GROUPID = Types.ObjectId(groupId);

  const newMessage = (await new models.Message()) as MessageProps;

  // ACTIVITY LOGGER
  // ===============================================
  const Activity = new models.Activities({
    group: groupId,
    userType: ACCOUNT_TYPE.AGENCY_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.MESSAGES,
    type: EntitiesAction.CREATE,
    description: 'New message created',
    payload: {
      message,
      phoneNumbers: contacts,
      time,
      id: newMessage._id, // eslint-disable-line
    },
    date: Date.now(),
  });

  newMessage.contacts.push(...contacts);
  newMessage.message = message;
  newMessage.sender = sender;

  newMessage.time = time;
  newMessage.status = status;
  newMessage.groupId = $GROUPID;

  await models.Department.findOneAndUpdate(
    { _id: $GROUPID },
    {
      $inc: { credit: -newMessage.contacts.length },
    },
    { new: true },
  );
  await newMessage.save({ validateBeforeSave: false });
  await Activity.save({ validateBeforeSave: false });
  return ProcessingSuccess(res, newMessage);
}
