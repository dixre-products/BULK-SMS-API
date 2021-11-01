import ValidateCreateSenderId from './add.senderid.validation';
import {
  ValidateDeleteSenderID,
  ValidateDeleteMultipleSender as ValidateDeleteMultipleSenderIds,
} from './delete.senderid.validation';
import ValidateUpdateSenderId from './update.senderid.validation';

export default {
  ValidateCreateSenderId,
  ValidateDeleteSenderID,
  ValidateUpdateSenderId,
  ValidateDeleteMultipleSenderIds,
};
