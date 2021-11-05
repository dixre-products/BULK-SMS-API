import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  UserExist,
} from '../../RequestStatus/status';
import models from '../../models';
import { EmployeeSignupProps } from '../../Types/interfaces';
import {
  ACCOUNT_TYPE,
  Entities,
  EntitiesAction,
} from '../../constants/enums';

export default async function CreateEmployee(
  req: Request,
  res: Response,
) {
  const { email, name, password, address, groupId, roleId } =
    req.body as EmployeeSignupProps;

  // CHECKS IF ACCOUNT ALREADY EXIST
  const findAccount = await models.Admin.findOne({
    email: new RegExp(`^${email}$`, 'i'),
  });

  if (findAccount) return UserExist(res);

  const $GROUPID = Types.ObjectId(groupId);
  const $ROLEID = Types.ObjectId(roleId);

  const employee = new models.Employee();
  const Activity = new models.Activities({
    group: groupId,
    userType: ACCOUNT_TYPE.ADMIN_ACCOUNT,
    admin: res.locals.id, // eslint-disable-line
    user: res.locals.id,
    entity: Entities.EMPLOYEES,
    type: EntitiesAction.CREATE,
    description: 'New Employee account created',
    payload: {
      name,
      email,
      id: employee._id, // eslint-disable-line
      address,
    },
    date: Date.now(),
  });
  employee.setPassword(password);

  employee.name = name;
  employee.email = email.toLowerCase();
  employee.address = address;

  employee.groupId = $GROUPID;
  employee.roleId = $ROLEID;

  await employee.save({ validateBeforeSave: false });

  const id = employee._id; //eslint-disable-line

  const createdEmployee = await models.Employee.findOne({
    _id: id,
  })
    .populate('groupId roleId')
    .select({
      hash: 0,
      salt: 0,
      password: 0,
    });
  await Activity.save();

  return ProcessingSuccess(res, createdEmployee);
}
