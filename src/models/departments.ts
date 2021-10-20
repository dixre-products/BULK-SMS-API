import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { DepartmentProps } from '../Types/interfaces';

const Department: Schema = new Schema(
  {
    credit: {
      type: Number,
    },
    name: {
      type: Schema.Types.String,
    },
    senderIds: {
      type: [Schema.Types.ObjectId],
      ref: 'senderID',
    },
  },
  { autoIndex: false },
);

Department.plugin(mongoosePaginate);

export default model<DepartmentProps>('department', Department);
