import { Router } from 'express';
import EmployeeController from '../controllers/Employee';
import Validation from '../Validators/Employee';
import ProtectRoutes from '../Middlewares/check.route.access';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';
import LoginValidation from '../Validators/Auth/index';
import LoginAccount from '../controllers/Auth/login.user';

const { GET_ID_PARAM, GET_EMPLOYESS_BY_GROUP } = constants.RoutesSubs;
const { LOGIN_BASE } = constants.RouteBase;
const employee = Router();

employee.get(
  GET_ID_PARAM,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateGetSingleEmployee),
  HandleAsyncFactory(EmployeeController.GetSingleEmployee),
);

employee.post(
  LOGIN_BASE,
  HandleAsyncFactory(LoginValidation.LoginAdmin),
  HandleAsyncFactory(LoginAccount),
);

employee.get(
  GET_EMPLOYESS_BY_GROUP,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateGetEmployeesByGroup),
  HandleAsyncFactory(EmployeeController.GetAllEmployeeByAgency),
);

export default employee;
