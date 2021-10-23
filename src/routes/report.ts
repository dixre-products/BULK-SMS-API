import { Router } from 'express';
import ReportController from '../controllers/Report';
import Validation from '../Validators/Report';

import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { CREATE_REPORT } = constants.RoutesSubs;
const report = Router();

report.post(
  CREATE_REPORT,
  HandleAsyncFactory(Validation.ValidateCreateReport),
  HandleAsyncFactory(ReportController.CreateRecord),
);

export default report;
