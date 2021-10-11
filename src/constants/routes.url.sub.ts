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

// Department Endpoint
const CREATE_DEPARTMENT = '/create-department';
const GET_DEPARTMENT = '/get-department';
const UPDATE_DEPARTMENT = '/update-department';
const ADD_CREDIT = '/add-credit';

// Contact Endpoint
const GET_CONTACT = '/get-contact';

// Message Endpoint
const GET_MESSAGE = '/get-message';

// Employee Endpoint
const CREATE_EMPLOYEE = '/create-employee';
const GET_EMPLOYEE = '/get-employee';
const UPDATE_EMPLOYEE = '/update-employee';
const UPDATE_EMPLOYEE_ROLE = '/update-employee-role';
const UPDATE_EMPLOYEE_DEPARTMENT = '/update-employee-department';

// Role Endpoint
const CREATE_ROLE = '/create-role';
const GET_ROLE = '/get-role';
const DELETE_ROLE = '/delete-role';

const GET_ID_PARAM = '/:id';
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

  GET_ID_PARAM,
  BASE_SUB,

  CREATE_DEPARTMENT,
  GET_DEPARTMENT,
  UPDATE_DEPARTMENT,
  ADD_CREDIT,
  GET_CONTACT,
  GET_MESSAGE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEE,
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_ROLE,
  UPDATE_EMPLOYEE_DEPARTMENT,
  CREATE_ROLE,
  GET_ROLE,
  DELETE_ROLE,
};
