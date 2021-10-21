import { Router } from 'express';
import SenderIdController from '../controllers/SenderIDs';
import Validation from '../Validators/SenderId';
import constants from '../constants/index';
import GetValidation from '../Validators/Get.Requests/index';

import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { GET_ID_PARAM, BASE_SUB } = constants.RoutesSubs;
const senderID = Router();

senderID.post(
  BASE_SUB,
  HandleAsyncFactory(Validation.ValidateCreateSenderId),
  HandleAsyncFactory(SenderIdController.AddSenderId),
);

senderID.get(
  BASE_SUB,
  HandleAsyncFactory(GetValidation),

  HandleAsyncFactory(SenderIdController.GetAllSenderId),
);

senderID.put(
  BASE_SUB,
  HandleAsyncFactory(Validation.ValidateUpdateSenderId),
  HandleAsyncFactory(SenderIdController.UpdateSenderId),
);

senderID.delete(
  GET_ID_PARAM,
  HandleAsyncFactory(Validation.ValidateDeleteSenderId),
  HandleAsyncFactory(SenderIdController.DeleteSenderId),
);

export default senderID;
