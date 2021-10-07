import { Router } from 'express';
// import * as useragent from 'useragent';
import { HandleUnverifiedAccount } from '../Middlewares/login';
import ValidateLoginMiddleWare from '../Validators/login.user.validator';
import { loginAccount } from '../controllers/login';
// import PreventBruteAttack from '../Middlewares/brute-force';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { LOGIN } = constants.RoutesSubs;
const login = Router();

login.post(
  LOGIN,
  HandleAsyncFactory(ValidateLoginMiddleWare),
  HandleAsyncFactory(HandleUnverifiedAccount),
  HandleAsyncFactory(loginAccount),
);

export default login;
