import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

import { EmployeeProps } from '../Types/interfaces';

const Employee: mongoose.Schema = new mongoose.Schema(
  {
    email: {
      type: mongoose.Schema.Types.String,
    },

    name: {
      type: mongoose.Schema.Types.String,
    },

    password: {
      type: mongoose.Schema.Types.String,
    },

    hash: {
      type: mongoose.Schema.Types.String,
    },

    salt: {
      type: mongoose.Schema.Types.String,
    },

    address: {
      type: mongoose.Schema.Types.String,
    },

    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'department',
    },

    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'role',
    },
  },

  { autoIndex: false },
);

Employee.methods.setPassword = function setPassword(password) {
  const documents = this as EmployeeProps;
  documents.salt = bcrypt.genSaltSync(10);
  documents.hash = bcrypt.hashSync(password, documents.salt);
};

export default mongoose.model<EmployeeProps>('employee', Employee);
