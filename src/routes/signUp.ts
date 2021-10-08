import { Router } from 'express';
import { SignUp } from '../controllers/signUp';
import { HandleDuplicateSignUpMiddleWare } from '../Middlewares/signUp';
import ValidateSignUpInput from '../Validators/signup.user.validator';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { SIGNUP } = constants.RoutesSubs;
const employee = Router();

employee.post(
  SIGNUP,
  HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(HandleDuplicateSignUpMiddleWare),
  HandleAsyncFactory(SignUp),
);

export default employee;
