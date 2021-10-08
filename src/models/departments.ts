import { Schema, model } from 'mongoose';

const Department: Schema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    credit: {
      type: Number,
    },
    name: {
      type: Schema.Types.String,
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: 'Group',
    },
  },
  { autoIndex: false },
);

export default model('department', Department);
