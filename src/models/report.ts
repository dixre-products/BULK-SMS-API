import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { ReportProps } from '../Types/interfaces';

const Report: mongoose.Schema = new mongoose.Schema(
  {
    message: {
      type: mongoose.Schema.Types.String,
    },

    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employee',
    },

    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'department',
    },
  },

  { autoIndex: false },
);

Report.plugin(mongoosePaginate);

export default mongoose.model<ReportProps>('report', Report);
