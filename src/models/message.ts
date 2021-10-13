import * as mongoose from 'mongoose';
import { MessageProps } from '../Types/interfaces';

const Message: mongoose.Schema = new mongoose.Schema(
  {
    contacts: { type: mongoose.Schema.Types.Array },

    message: { type: mongoose.Schema.Types.String },

    sender: { type: mongoose.Schema.Types.String },
    time: { type: mongoose.Schema.Types.Date },

    status: {
      type: mongoose.Schema.Types.String,
      enum: ['notApproved', 'approved', 'pending', 'sent'],
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
