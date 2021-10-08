import * as mongoose from 'mongoose';

const Contact: mongoose.Schema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId },

    name: {
      type: mongoose.Schema.Types.String,
    },

    phoneNumber: {
      type: mongoose.Schema.Types.String,
    },

    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    },

    date: {
      type: mongoose.Schema.Types.Date,
    },
  },

  { autoIndex: false },
);

export default mongoose.model('contact', Contact);
