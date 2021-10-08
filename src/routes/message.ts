import { Router } from 'express';
import MessageController from '../controllers/Messages';
// import ValidateSignUpInput from '../Validators/signup.user.validator';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { ADMIN_BASE_SUB, GET_ID_PARAM, BASE_SUB } =
  constants.RoutesSubs;
const message = Router();

message.post(
  BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(MessageController.CreateMessage),
);

message.put(
  BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(MessageController.UpdateMessage),
);

message.delete(
  BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(MessageController.DeleteMessage),
);

message.get(
  GET_ID_PARAM,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(MessageController.GetSingleMessageByGroup),
);

message.get(
  ADMIN_BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(MessageController.GetAllMessages),
);

export default message;
