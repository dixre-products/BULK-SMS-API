import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function CreateRole(
  req: Request,
  res: Response,
) {
  const { sendMessage, readMessage, name, addContact } = req.body as {
    sendMessage: boolean;
    readMessage: boolean;
    name: string;
    addContact: boolean;
  };

  // const $UID = Types.ObjectId(groupId);
  const role = new models.Role();

  role.name = name;
  role.sendMessage = sendMessage;
  role.readMessage = readMessage;
  role.addContact = addContact;

  await role.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, role);
}
