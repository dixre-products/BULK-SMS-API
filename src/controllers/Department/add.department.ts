import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { DepartmentProps } from '../../Types/interfaces';

export default async function CreateDepartment(
  req: Request,
  res: Response,
) {
  const { name, credit, groupId } = req.body as {
    name: string;
    credit: number;
    groupId: string;
  };

  const $UID = Types.ObjectId(groupId);
  const department = new models.Department() as DepartmentProps;

  department.name = name;
  department.credit = credit;
  department.groupId = $UID;

  await department.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, department);
}
