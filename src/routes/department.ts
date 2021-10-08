import { Router } from 'express';
import DepartmentController from '../controllers/Department';
// import ValidateSignUpInput from '../Validators/signup.user.validator';
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
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(DepartmentController.CreateDepartment),
);

department.get(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(DepartmentController.GetAllDepartment),
);

department.get(
  GET_ID_PARAM,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(DepartmentController.GetSingleDepartment),
);

department.put(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(DepartmentController.UpdateDepartment),
);

department.put(
  ADMIN_BASE_SUB + CREDIT_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(DepartmentController.UpdateDepartmentCredit),
);

export default department;
