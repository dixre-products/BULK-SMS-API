import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { ContactProps } from '../Types/interfaces';

const Contact: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
    },

    phone: {
      type: mongoose.Schema.Types.String,
    },

    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'department',
    },

    date: {
      type: mongoose.Schema.Types.Date,
    },
  },

  { autoIndex: false },
);

Contact.plugin(mongoosePaginate);

export default mongoose.model<ContactProps>('contact', Contact);
