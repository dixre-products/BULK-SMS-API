import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';
import { DepartmentProps } from '../../Types/interfaces';

export default async function CreateDepartment(
  req: Request,
  res: Response,
) {
  const { name, credit } = req.body as {
    name: string;
    credit: number;
  };

  const department = new models.Department() as DepartmentProps;

  department.name = name;
  department.credit = credit;

  await department.save({ validateBeforeSave: false });

  return ProcessingSuccess(res, department);
}
