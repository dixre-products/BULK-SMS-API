import { Schema, model } from 'mongoose';
import { DepartmentProps } from '../Types/interfaces';

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

export default model<DepartmentProps>('department', Department);
