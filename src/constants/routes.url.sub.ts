// ROUTES SUB URLS

// LOGIN
const LOGIN = '/';

// SIGNUP
const SIGNUP = '/';

// TOKEN MANAGEMENT
const TOKEN_MANAGEMENT = '/refresh'; // manage tokens

// VERIFICATION
const VERIFICATION = '/';
const VERIFICATION_CALL = '/call'; // verification
const VERIFICATION_SMS = '/sms'; // verification
const VERIFICATION_CODE = '/code'; // verification

// RESET PASSWORD

// PROFILE
const GET_PROFILE = '/:uid';
const PROFILE = '/';

const RESSET_PASSWORD = '/';

// EMPLOYEE
const ADMIN_BASE_SUB = '/admin';
const ROLE_BASE_SUB = '/role';
const DEPARTMENT_BASE_SUB = '/department';
const EMPLOYEE_BASE_SUB = '/employee';
const MESSAGE_BASE_SUB = '/message';
const GET_ID_PARAM = '/:id';
const CREDIT_BASE_SUB = '/credit';
const BASE_SUB = '/';
// const

export default {
  PROFILE,
  GET_PROFILE,
  LOGIN,
  SIGNUP,
  TOKEN_MANAGEMENT,
  VERIFICATION,
  VERIFICATION_CALL,
  VERIFICATION_CODE,
  VERIFICATION_SMS,
  RESSET_PASSWORD,

  ADMIN_BASE_SUB,
  ROLE_BASE_SUB,
  DEPARTMENT_BASE_SUB,
  EMPLOYEE_BASE_SUB,
  MESSAGE_BASE_SUB,
  GET_ID_PARAM,
  CREDIT_BASE_SUB,
  BASE_SUB,
};
