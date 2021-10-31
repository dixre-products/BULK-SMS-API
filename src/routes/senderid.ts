import { Router } from 'express';
import SenderIdController from '../controllers/SenderIDs';
import Validation from '../Validators/SenderId';
import constants from '../constants/index';
import ProtectRoutes from '../Middlewares/check.route.access';
import HandleAsyncFactory from '../Middlewares/async.error.handler';
import UserGetValidator from '../Validators/Get.Requests/user.get.validator';

const { GET_ID_PARAM, BASE_SUB } = constants.RoutesSubs;
const senderID = Router();

senderID.post(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateCreateSenderId),
  HandleAsyncFactory(SenderIdController.AddSenderId),
);

senderID.get(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(UserGetValidator),
  HandleAsyncFactory(SenderIdController.GetAllSenderId),
);

senderID.put(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateUpdateSenderId),
  HandleAsyncFactory(SenderIdController.UpdateSenderId),
);

senderID.delete(
  GET_ID_PARAM,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateDeleteSenderID),
  HandleAsyncFactory(SenderIdController.DeleteSenderId),
);

export default senderID;
