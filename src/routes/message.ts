import { Router } from 'express';
import MessageController from '../controllers/Messages';
import Validation from '../Validators/Messages';

import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { GET_ID_PARAM, BASE_SUB, DELETE_ALL_MESSAGES } =
  constants.RoutesSubs;
const message = Router();

message.post(
  BASE_SUB,
  HandleAsyncFactory(Validation.ValidateCreateMessage),
  HandleAsyncFactory(MessageController.CreateMessage),
);

message.put(
  BASE_SUB,
  HandleAsyncFactory(Validation.ValidateUpdateMessage),
  HandleAsyncFactory(MessageController.UpdateMessage),
);

message.delete(
  DELETE_ALL_MESSAGES,
  HandleAsyncFactory(Validation.ValidateMultipleDeleteMessage),
  HandleAsyncFactory(MessageController.DeleteMultipleMessage),
);

message.delete(
  GET_ID_PARAM,
  HandleAsyncFactory(Validation.ValidateDeleteMessage),
  HandleAsyncFactory(MessageController.DeleteMessage),
);

message.get(
  GET_ID_PARAM,
  HandleAsyncFactory(Validation.ValidateGetSingleMessageByGroup),
  HandleAsyncFactory(MessageController.GetMessageByGroup),
);

export default message;
