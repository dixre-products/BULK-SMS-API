import * as mongoose from 'mongoose';
import { RoleProps } from '../Types/interfaces';

const Role: mongoose.Schema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId },

    name: {
      type: mongoose.Schema.Types.String,
      enum: ['maker', 'checker'],
    },

    sendMessage: {
      type: Boolean,
    },

    readMessage: {
      type: Boolean,
    },

    addContact: {
      type: Boolean,
    },
  },

  { autoIndex: false },
);

export default mongoose.model<RoleProps>('role', Role);
