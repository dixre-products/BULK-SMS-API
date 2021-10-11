import { Schema, model } from 'mongoose';

const Department: Schema = new Schema(
  {
    credit: {
      type: Number,
    },
    name: {
      type: Schema.Types.String,
    },
  },
  { autoIndex: false },
);

export default model('department', Department);
