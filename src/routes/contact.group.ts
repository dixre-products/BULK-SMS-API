import { Router } from 'express';
import ContactController from '../controllers/Contact';
import Validation from '../Validators/ContactGroup';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';
import ProtectRoutes from '../Middlewares/check.route.access';
import AddContactPermission from '../Middlewares/permission.checker/permission.add.contact';
import UserGetValidator from '../Validators/Get.Requests/user.get.validator';

const { GET_ID_PARAM, BASE_SUB, DELETE_MULTIPLE_CONTACTS } =
  constants.RoutesSubs;
const contactGroup = Router();

contactGroup.post(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(AddContactPermission),
  HandleAsyncFactory(Validation.ValidateCreateContactGroup),
  HandleAsyncFactory(ContactController.CreateContact),
);

contactGroup.put(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(AddContactPermission),
  HandleAsyncFactory(Validation.ValidateUpdateContactGroup),
  HandleAsyncFactory(ContactController.UpdateContact),
);

// Admin: Contact Routes
contactGroup.get(
  BASE_SUB,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(UserGetValidator),
  HandleAsyncFactory(ContactController.GetAllContact),
);

contactGroup.delete(
  DELETE_MULTIPLE_CONTACTS,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateMultipleDeleteContactsGroup),
  HandleAsyncFactory(ContactController.DeleteMultipleContacts),
);

contactGroup.get(
  GET_ID_PARAM,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateGetSingleContactGroup),
  HandleAsyncFactory(ContactController.GetSingleContact),
);

export default contactGroup;
