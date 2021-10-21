import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import { EmployeeSignupProps } from '../../Types/interfaces';
import constants from '../../constants';

export async function UpdateEmployee(req: Request, res: Response) {
  const { id, updates } = req.body as {
    id: string;
    updates: EmployeeSignupProps;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Employee.findOneAndUpdate(
    { _id: ID },
    updates,
    { new: true },
  ).populate('groupId roleId');

  if (!doc)
    return ResourceNotFound(
      res,
      constants.RequestResponse.EmployeeNotFound,
    );

  return ProcessingSuccess(res, doc);
}

export async function AssignEmployeeToDepartment(
  req: Request,
  res: Response,
) {
  const { employeeId, departmentId } = req.body as {
    employeeId: string;
    departmentId: string;
  };
  const $EID = Types.ObjectId(employeeId);
  const $DID = Types.ObjectId(departmentId);

  const employeeExist = await models.Employee.findOne({ _id: $EID });
  const departmentExist = await models.Department.findOne({
    _id: $DID,
  });

  if (!employeeExist)
    return ResourceNotFound(
      res,
      constants.RequestResponse.EmployeeNotFound,
    );
  if (!departmentExist)
    return ResourceNotFound(
      res,
      constants.RequestResponse.DepartmentNotFound,
    );

  const doc = await models.Employee.findOneAndUpdate(
    { _id: $EID },
    {
      $set: { groupId: $DID },
    },
    { new: true },
  ).populate('groupId roleId');

  return ProcessingSuccess(res, doc);
}

export async function AssignEmployeeToRole(
  req: Request,
  res: Response,
) {
  const { employeeId, roleId } = req.body as {
    employeeId: string;
    roleId: string;
  };
  const $EID = Types.ObjectId(employeeId);
  const $RID = Types.ObjectId(roleId);

  const employeeExist = await models.Employee.findOne({ _id: $EID });
  const roleExist = await models.Role.findOne({ _id: $RID });

  if (!employeeExist)
    return ResourceNotFound(
      res,
      constants.RequestResponse.EmployeeNotFound,
    );
  if (!roleExist)
    return ResourceNotFound(
      res,
      constants.RequestResponse.RoleNotFound,
    );

  const doc = await models.Employee.findOneAndUpdate(
    { _id: $EID },
    {
      $set: { roleId: $RID },
    },
    { new: true },
  )
    .populate('groupId roleId')
    .select({
      hash: 0,
      salt: 0,
      password: 0,
    });

  return ProcessingSuccess(res, doc);
}
