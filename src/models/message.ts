import * as mongoose from 'mongoose';
import { MessageProps } from '../Types/interfaces';

const Message: mongoose.Schema = new mongoose.Schema(
  {
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contact',
      },
    ],

    message: { type: mongoose.Schema.Types.String },

    sender: { type: mongoose.Schema.Types.String },
    time: { type: mongoose.Schema.Types.Date },

    status: {
      enum: ['notApproved', 'approved', 'pending', 'sent'],
      default: 'notApproved',
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
