import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
// @ts-ignore
import helmet from 'helmet';
import routes from './routes';
import constants from './constants/index';
import ErrorHandler from './Middlewares/error.handler';
import Logger, { HttpLogger } from './Logger/index';

require('dotenv/config');
require('./utills/connection');

const { EMPLOYEE, DEPARTMENT, CONTACT, MESSAGE, Admin } =
  constants.RouteBase;
// Application-Level Middleware
const app = express();

process.on('uncaughtException', (err) => {
  Logger.error(err.message);
});

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  morgan('combined', {
    skip: (
      req, // eslint-disable-line
      res,
    ) => res.statusCode < 400,
    stream: {
      write: (msg: string) => {
        if (app.get('env') === 'production') {
          HttpLogger.http(msg);
        }
      },
    },
  }),
);
// api doc directory
app.use('/', express.static('api-doc'));

// Routes
app.use(EMPLOYEE, routes.Employee);
app.use(DEPARTMENT, routes.Department);
app.use(MESSAGE, routes.Message);
app.use(CONTACT, routes.Contact);
app.use(Admin, routes.Admin);

// Handles error
app.use(ErrorHandler);

export default app;
