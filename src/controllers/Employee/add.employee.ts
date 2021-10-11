import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { EmployeeSignupProps } from '../../Types/interfaces';

export default async function CreateEmployee(
  req: Request,
  res: Response,
) {
  const { email, name, password, address, groupId, roleId } =
    req.body as EmployeeSignupProps;

  const $GROUPID = Types.ObjectId(groupId);
  const $ROLEID = Types.ObjectId(roleId);

  const employee = new models.Employee();

  employee.setPassword(password);

  employee.name = name;
  employee.email = email;
  employee.address = address;

  employee.groupId = groupId && $GROUPID;
  employee.roleId = roleId && $ROLEID;

  await employee.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, employee);
}
