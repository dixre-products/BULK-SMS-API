import ValidateCreateContact from './add.contact.validation';
import {
  ValidateDeleteContact,
  ValidateMultipleDeleteContacts,
} from './delete.contact.validation';
import ValidateUpdateContact from './update.contact.validation';
import ValidateGetSingleContactByGroup from './get.contact.validation';

export default {
  ValidateGetSingleContactByGroup,
  ValidateUpdateContact,
  ValidateDeleteContact,
  ValidateCreateContact,
  ValidateMultipleDeleteContacts,
};
