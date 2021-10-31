import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { ContactProps } from '../Types/interfaces';

const Contact: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
    },

    number: {
      type: mongoose.Schema.Types.String,
    },

    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'department',
    },

    date: {
      type: mongoose.Schema.Types.Date,
      default: Date.now(),
    },
  },

  { autoIndex: false },
);

Contact.index({ name: 'text', phone: 'text' });
Contact.plugin(mongoosePaginate);

export default mongoose.model<ContactProps>('contact', Contact);
