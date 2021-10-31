import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { ContactProps } from '../../Types/interfaces';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

export default async function CreateContact(
  req: Request,
  res: Response,
) {
  const { name, number, groupId } = req.body as {
    groupId: string;
    name: string;
    number: number;
  };

  const $UID = Types.ObjectId(groupId);
  const contact = new models.Contact() as ContactProps;

  // ACTIVITY LOGGER
  // ===============================================
  const Activity = new models.Activities({
    group: groupId,
    userType: ACCOUNT_TYPE.AGENCY_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.CONTACTS,
    type: EntitiesAction.CREATE,
    description: 'New contact created',
    payload: {
      name,
      phoneNumber: number,
      id: contact._id, // eslint-disable-line
    },
    date: Date.now(),
  });

  contact.number = number;
  contact.name = name;
  contact.groupId = $UID;

  await contact.save({ validateBeforeSave: false });
  await Activity.save({ validateBeforeSave: false });

  const createdContact = await models.Contact.findOne({
    _id: contact._id, // eslint-disable-line
  });
  return ProcessingSuccess(res, createdContact);
}
