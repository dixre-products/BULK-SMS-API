import { Router } from 'express';
import UpdateProfile from '../controllers/update.profile';
import GetProfile from '../controllers/get.profile';
import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';
import ValidateUpdateUser from '../Validators/update.profile.validator';
import ValidateGetUserProfile from '../Validators/get.profile.validate';
import ValidateAccessToken from '../Middlewares/check.route.access';

const { PROFILE, GET_PROFILE } = constants.RoutesSubs;
const profile = Router();

profile.put(
  PROFILE,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(ValidateUpdateUser),
  HandleAsyncFactory(UpdateProfile),
);

profile.get(
  GET_PROFILE,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(ValidateGetUserProfile),
  HandleAsyncFactory(GetProfile),
);

export default profile;
