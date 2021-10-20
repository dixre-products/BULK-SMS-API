import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { RoleProps } from '../Types/interfaces';

const Role: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
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

Role.plugin(mongoosePaginate);

export default mongoose.model<RoleProps>('role', Role);
