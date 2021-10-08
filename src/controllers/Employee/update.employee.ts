import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import { EmployeeSignupProps } from '../../Types/interfaces';

export async function UpdateEmployee(req: Request, res: Response) {
  const { id, updates } = req.body as {
    id: string;
    updates: EmployeeSignupProps;
  };
  const ID = Types.ObjectId(id);

  const doc = await models.Employee.findOneAndUpdate(ID, updates);

  if (!doc) return ResourceNotFound(res, 'Employee not Found ');

  return ProcessingSuccess(res, doc);
}

export async function AssignEmployeeToDepartment(
  req: Request,
  res: Response,
) {
  const { EmployeeId, departmentId } = req.body as {
    EmployeeId: string;
    departmentId: string;
  };
  const $EID = Types.ObjectId(EmployeeId);
  const $DID = Types.ObjectId(departmentId);

  const employeeExist = await models.Employee.findOne($EID);
  const departmentExist = await models.Department.findOne($DID);

  if (!employeeExist)
    return ResourceNotFound(res, 'Employee not Found ');
  if (!departmentExist)
    return ResourceNotFound(res, 'Department not Found ');

  const doc = await models.Employee.findOneAndUpdate($EID, {
    $push: { departmentId: $DID },
  });

  return ProcessingSuccess(res, doc);
}

export async function AssignEmployeeToRole(
  req: Request,
  res: Response,
) {
  const { EmployeeId, roleId } = req.body as {
    EmployeeId: string;
    roleId: string;
  };
  const $EID = Types.ObjectId(EmployeeId);
  const $RID = Types.ObjectId(roleId);

  const employeeExist = await models.Employee.findOne($EID);
  const roleExist = await models.Role.findOne($RID);

  if (!employeeExist)
    return ResourceNotFound(res, 'Employee not Found ');
  if (!roleExist) return ResourceNotFound(res, 'Role not Found ');

  const doc = await models.Employee.findOneAndUpdate($EID, {
    ' $push': { roleId: $RID },
  });

  return ProcessingSuccess(res, doc);
}
