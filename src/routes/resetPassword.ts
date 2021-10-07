import { Router } from 'express';
import RessetPassword from '../controllers/passwordResset';
import constants from '../constants/index';
import ValidatePasswordResset from '../Validators/resset.password.validator';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { RESSET_PASSWORD } = constants.RoutesSubs;
const PasswordReset = Router();

PasswordReset.post(
  RESSET_PASSWORD,
  HandleAsyncFactory(ValidatePasswordResset),
  HandleAsyncFactory(RessetPassword),
);

export default PasswordReset;
