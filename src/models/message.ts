import * as mongoose from 'mongoose';
import { MessageProps } from '../Types/interfaces';

const Message: mongoose.Schema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId },

    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact',
      },
    ],

    message: { type: mongoose.Schema.Types.String },

    sender: { type: mongoose.Schema.Types.String },
    time: { type: mongoose.Schema.Types.Date },

    status: { enum: ['notApproved', 'approved', 'pending', 'sent'] },

    groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },

    date: { type: mongoose.Schema.Types.Date },
  },

  { autoIndex: false },
);

export default mongoose.model<MessageProps>('message', Message);
