import { Router } from 'express';
import SenderIdController from '../controllers/SenderIDs';
import Validation from '../Validators/SenderId';
import constants from '../constants/index';
import GetValidation from '../Validators/Get.Requests/index';
import ProtectRoutes from '../Middlewares/check.route.access';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { GET_ID_PARAM, BASE_SUB, DELETE_ALL_SENDERS } =
  constants.RoutesSubs;
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
  HandleAsyncFactory(GetValidation),
  HandleAsyncFactory(SenderIdController.GetAllSenderId),
);

senderID.put(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateUpdateSenderId),
  HandleAsyncFactory(SenderIdController.UpdateSenderId),
);

senderID.delete(
  DELETE_ALL_SENDERS,
  HandleAsyncFactory(Validation.ValidateDeleteMultipleSender),
  HandleAsyncFactory(SenderIdController.DeleteMultipleSenders),
);

senderID.delete(
  GET_ID_PARAM,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateDeleteSenderID),
  HandleAsyncFactory(SenderIdController.DeleteSenderId),
);

export default senderID;
