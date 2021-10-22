import { Router } from 'express';
import EmployeeController from '../controllers/Employee';
import Validation from '../Validators/Employee';
import ProtectRoutes from '../Middlewares/check.route.access';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { GET_ID_PARAM, GET_EMPLOYESS_BY_GROUP } = constants.RoutesSubs;
const employee = Router();

employee.get(
  GET_ID_PARAM,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateGetSingleEmployee),
  HandleAsyncFactory(EmployeeController.GetSingleEmployee),
);

employee.get(
  GET_EMPLOYESS_BY_GROUP,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateGetEmployeesByGroup),
  HandleAsyncFactory(EmployeeController.GetAllEmployeeByAgency),
);

export default employee;
