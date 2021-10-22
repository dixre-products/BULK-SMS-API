import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { Entities, EntitiesAction } from '../constants/enums';
import { Activities as ActivitiesProps } from '../Types/interfaces';

const { CREATE, UPDATE, DELETE } = EntitiesAction;
const {
  DEPARTMENTS,
  MESSAGES,
  CONTACTS,
  ROLES,
  SENDERIDS,
  EMPLOYEES,
} = Entities;

const Activities: Schema = new Schema(
  {
    group: { type: Schema.Types.String },

    user: { type: Schema.Types.ObjectId, ref: 'employee' },

    admin: { type: Schema.Types.ObjectId, ref: 'admin' },

    type: {
      type: Schema.Types.String,
      enum: [CREATE, UPDATE, DELETE],
    },

    entity: {
      type: Schema.Types.String,
      enum: [
        DEPARTMENTS,
        MESSAGES,
        CONTACTS,
        ROLES,
        SENDERIDS,
        EMPLOYEES,
      ],
    },

    payload: [
      {
        name: Schema.Types.String,
        email: Schema.Types.String,
        entityId: Schema.Types.String,
        address: Schema.Types.String,
        phone: Schema.Types.String,
      },
    ],
    date: { type: Schema.Types.Date, default: Date.now() },
  },

  { autoIndex: false },
);

Activities.plugin(mongoosePaginate);

export default model<ActivitiesProps>('Activities', Activities);
