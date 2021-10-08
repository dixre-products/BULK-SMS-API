import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

import { AdminProps } from '../Types/interfaces';

const Admin: Schema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },

    email: {
      type: Schema.Types.String,
    },

    name: {
      type: Schema.Types.String,
    },

    password: {
      type: Schema.Types.String,
    },

    hash: {
      type: Schema.Types.String,
    },

    salt: {
      type: Schema.Types.String,
    },
  },

  { autoIndex: false },
);

Admin.methods.setPassword = function setPassword(password) {
  const documents = this as AdminProps;
  documents.salt = bcrypt.genSaltSync(10);
  documents.hash = bcrypt.hashSync(password, documents.salt);
};

export default model<AdminProps>('admin', Admin);
