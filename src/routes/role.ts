import { Router } from 'express';
import RoleController from '../controllers/Role';
// import ValidateSignUpInput from '../Validators/signup.user.validator';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const {
  ADMIN_BASE_SUB,

  GET_ID_PARAM,
} = constants.RoutesSubs;
const role = Router();

role.post(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(RoleController.CreateRole),
);

role.delete(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(RoleController.DeleteRole),
);

role.get(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(RoleController.GetAllRole),
);

role.get(
  ADMIN_BASE_SUB + GET_ID_PARAM,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(RoleController.GetSingleRole),
);

export default role;
