import { Router } from 'express';
import EmployeeController from '../controllers/Employee';
import Validation from '../Validators/Employee';

import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { GET_ID_PARAM } = constants.RoutesSubs;
const employee = Router();

employee.get(
  GET_ID_PARAM,
  HandleAsyncFactory(Validation.ValidateGetSingleEmployee),
  HandleAsyncFactory(EmployeeController.GetSingleEmployee),
);

export default employee;
