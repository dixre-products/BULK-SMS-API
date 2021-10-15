import * as mongoose from 'mongoose';
import { MessageProps } from '../Types/interfaces';
import MessageStatus from '../constants/enums';

const Message: mongoose.Schema = new mongoose.Schema(
  {
    contacts: { type: mongoose.Schema.Types.Array },

    message: { type: mongoose.Schema.Types.String },

    sender: { type: mongoose.Schema.Types.String },
    time: { type: mongoose.Schema.Types.Date },

    status: {
      type: mongoose.Schema.Types.String,
      enum: [
        MessageStatus.NOT_APPROVED,
        MessageStatus.APPROVED,
        MessageStatus.PENDING,
        MessageStatus.SENT,
      ],
    },

    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'department',
    },

    date: { type: mongoose.Schema.Types.Date },
  },

  { autoIndex: false },
);

export default mongoose.model<MessageProps>('message', Message);
