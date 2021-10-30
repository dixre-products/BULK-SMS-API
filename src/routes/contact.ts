import { Router } from 'express';
import ContactController from '../controllers/Contact';
import Validation from '../Validators/Contact';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';
import ProtectRoutes from '../Middlewares/check.route.access';

const { GET_ID_PARAM, BASE_SUB, DELETE_ALL_CONTACTS } =
  constants.RoutesSubs;
const contact = Router();

contact.post(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateCreateContact),
  HandleAsyncFactory(ContactController.CreateContact),
);

contact.put(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateUpdateContact),
  HandleAsyncFactory(ContactController.UpdateContact),
);

contact.delete(
  DELETE_ALL_CONTACTS,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateMultipleDeleteContacts),
  HandleAsyncFactory(ContactController.DeleteMultipleContacts),
);

contact.delete(
  GET_ID_PARAM,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateDeleteContact),
  HandleAsyncFactory(ContactController.DeleteContact),
);

export default contact;
