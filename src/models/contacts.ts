import * as mongoose from 'mongoose';

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

export default mongoose.model('contact', Contact);
