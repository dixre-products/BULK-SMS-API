import { Router } from 'express';
import EmployeeController from '../controllers/Employee';
// import ValidateSignUpInput from '../Validators/signup.user.validator';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const {
  ADMIN_BASE_SUB,
  ROLE_BASE_SUB,
  DEPARTMENT_BASE_SUB,

  GET_ID_PARAM,
} = constants.RoutesSubs;
const employee = Router();

employee.post(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(EmployeeController.CreateEmployee),
);

employee.put(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(EmployeeController.UpdateEmployee),
);

employee.get(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(EmployeeController.GetAllEmployee),
);

employee.get(
  GET_ID_PARAM,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(EmployeeController.GetSingleEmployee),
);

employee.post(
  ADMIN_BASE_SUB + GET_ID_PARAM + ROLE_BASE_SUB, // employee/admin/:id/role
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(EmployeeController.AssignEmployeeToRole),
);

employee.post(
  ADMIN_BASE_SUB + GET_ID_PARAM + DEPARTMENT_BASE_SUB, // employee/admin/:id/role
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(EmployeeController.AssignEmployeeToDepartment),
);

export default employee;
