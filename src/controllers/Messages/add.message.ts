import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { MessageProps } from '../../Types/interfaces';

export default async function Createmessage(
  req: Request,
  res: Response,
) {
  const { contacts, message, sender, time, status, groupId } =
    req.body as {
      message: string;
      sender: string;
      groupId: string;
      contacts: Array<string>;
      time: Date;
      status: any;
    };

  const $GROUPID = Types.ObjectId(groupId);

  const newMessage = new models.Message() as MessageProps;

  newMessage.contacts.push(...contacts);
  newMessage.message = message;
  newMessage.sender = sender;

  newMessage.time = time;
  newMessage.status = status;
  newMessage.groupId = $GROUPID;

  await newMessage.save({ validateBeforeSave: false });

  models.Department.findOneAndUpdate(
    { _id: $GROUPID },
    {
      $inc: { credit: -newMessage.contacts.length },
    },
    { new: true },
  );

  return ProcessingSuccess(res, newMessage);
}
