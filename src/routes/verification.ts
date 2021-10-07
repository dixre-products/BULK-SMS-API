import { Router } from 'express';
import {
  verifyCode,
  SendCallVerificationPin,
  SendSMSVerificationPin,
} from '../controllers/verification';
import constants from '../constants/index';
import ValidateNumberVerification from '../Validators/verify.phone.validator';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const {
  VERIFICATION_CALL,
  VERIFICATION_CODE,
  VERIFICATION_SMS,
} = constants.RoutesSubs;
const Verification = Router();

Verification.post(
  VERIFICATION_CALL,
  HandleAsyncFactory(ValidateNumberVerification),
  HandleAsyncFactory(SendCallVerificationPin),
);
Verification.post(
  VERIFICATION_SMS,
  HandleAsyncFactory(ValidateNumberVerification),
  HandleAsyncFactory(SendSMSVerificationPin),
);
Verification.post(VERIFICATION_CODE, HandleAsyncFactory(verifyCode));

export default Verification;
