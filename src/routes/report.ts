import { Router } from 'express';
import ReportController from '../controllers/Report';
import Validation from '../Validators/Report';
import ProtectRoutes from '../Middlewares/check.route.access';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const { CREATE_REPORT } = constants.RoutesSubs;
const report = Router();

report.post(
  CREATE_REPORT,
  HandleAsyncFactory(ProtectRoutes),
  HandleAsyncFactory(Validation.ValidateCreateReport),
  HandleAsyncFactory(ReportController.CreateRecord),
);

export default report;
