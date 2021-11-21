import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  InvalidInputs,
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
import {
  getPhoneNumberInfo,
  sendAccountCredentials,
} from '../../utills/utills';

export default async function CreateEmployee(
  req: Request,
  res: Response,
) {
  const {
    email,
    name,
    password,
    address,
    groupId,
    roleId,
    phoneNumber,
    countryCode,
  } = req.body as EmployeeSignupProps;

  const employee = new models.Employee();

  // CHECKS IF ACCOUNT ALREADY EXIST
  const findAccount = await models.Admin.findOne({
    $or: [
      {
        email: new RegExp(`^${email}$`, 'i'),
      },
      {
        phoneNumber: phoneNumber.trim(),
      },
    ],
  });

  // PHONE NUMBER INTEGRATION
  if (phoneNumber) {
    try {
      const phoneInfo = getPhoneNumberInfo(phoneNumber, countryCode);
      if (phoneInfo) {
        employee.phoneNumberInternational = phoneInfo;
        employee.phoneNumber = phoneNumber;
        employee.countryCode = countryCode;
      }

      if (!email && !phoneInfo) {
        return InvalidInputs(
          res,
          'Email or phone number must be provided',
        );
      }
    } catch {
      if (!email) {
        return InvalidInputs(
          res,
          'Email or phone number must be provided',
        );
      }
    }
  }

  if (findAccount) return UserExist(res);

  const $GROUPID = Types.ObjectId(groupId);
  const $ROLEID = Types.ObjectId(roleId);

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
    date: new Date(),
  });
  employee.setPassword(password);

  employee.name = name;
  employee.email = email.toLowerCase().trim();
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

  await sendAccountCredentials(
    name,
    email.trim(),
    password,
    phoneNumber,
  );
  await Activity.save();

  return ProcessingSuccess(res, createdEmployee);
}
