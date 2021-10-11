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

contact.put(
  BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(Validation.ValidateUpdateContact),
);

contact.delete(
  BASE_SUB,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(Validation.ValidateDeleteContact),
);

contact.get(
  GET_ID_PARAM,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(Validation.ValidateGetSingleContactByGroup),
);

export default contact;
