import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function CreateAdmin(
  req: Request,
  res: Response,
) {
  const { email, name, password } = req.body as {
    email: string;
    name: string;
    password: string;
  };

  const admin = new models.Admin();

  admin.setPassword(password);

  admin.name = name;
  admin.email = email;

  await admin.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, admin);
}
