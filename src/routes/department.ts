import { Router } from 'express';
import DepartmentController from '../controllers/Department';
import Validation from '../Validators/Department';

import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const {
  ADMIN_BASE_SUB,

  GET_ID_PARAM,
  CREDIT_BASE_SUB,
} = constants.RoutesSubs;
const department = Router();

department.post(
  ADMIN_BASE_SUB,
  HandleAsyncFactory(Validation.ValidateCreateDepartment),
  HandleAsyncFactory(DepartmentController.CreateDepartment),
);

department.get(
  ADMIN_BASE_SUB,
  // HandleAsyncFactory(Validation.),
  HandleAsyncFactory(DepartmentController.GetAllDepartment),
);

department.get(
  GET_ID_PARAM,
  HandleAsyncFactory(Validation.ValidateGetSingleDepartment),
  HandleAsyncFactory(DepartmentController.GetSingleDepartment),
);

department.put(
  ADMIN_BASE_SUB,
  HandleAsyncFactory(Validation.ValidateUpdateDepartment),
  HandleAsyncFactory(DepartmentController.UpdateDepartment),
);

department.put(
  ADMIN_BASE_SUB + CREDIT_BASE_SUB,
  HandleAsyncFactory(Validation.ValidateUpdateDepartmentCredit),
  HandleAsyncFactory(DepartmentController.UpdateDepartmentCredit),
);

export default department;
