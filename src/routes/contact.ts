import { Router } from 'express';
import ContactController from '../controllers/Contact';
import Validation from '../Validators/Contact';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { GET_ID_PARAM, BASE_SUB } = constants.RoutesSubs;
const contact = Router();

contact.post(
  BASE_SUB,
  HandleAsyncFactory(Validation.ValidateCreateContact),
  HandleAsyncFactory(ContactController.CreateContact),
);

contact.get(
  GET_ID_PARAM,
  HandleAsyncFactory(Validation.ValidateGetSingleContactByGroup),
  HandleAsyncFactory(ContactController.GetContactByGroup),
);

contact.put(
  BASE_SUB,
  HandleAsyncFactory(Validation.ValidateUpdateContact),
  HandleAsyncFactory(ContactController.UpdateContact),
);

contact.delete(
  GET_ID_PARAM,
  HandleAsyncFactory(Validation.ValidateDeleteContact),
  HandleAsyncFactory(ContactController.DeleteContact),
);

export default contact;
