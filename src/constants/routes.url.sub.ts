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
const GET_EMPLOYEES = '/get-employees';
const UPDATE_EMPLOYEE = '/update-employee';
const UPDATE_EMPLOYEE_ROLE = '/update-employee-role';
const GET_EMPLOYESS_BY_GROUP = '/all/:groupId';
const UPDATE_EMPLOYEE_DEPARTMENT = '/update-employee-department';

// Role Endpoint
const CREATE_ROLE = '/create-role';
const GET_ROLE = '/get-role';
const DELETE_ROLE = '/delete-role';
const UPDATE_ROLE = '/update-role';

const GET_ID_PARAM = '/:id';
const BASE_SUB = '/';
// Admin
const DELETE_ALL_ADMINS = '/delete-admins';
const DELETE_ALL_CONTACTS = '/delete-contacts';
const DELETE_ALL_GROUPS = '/delete-groups';
const DELETE_ALL_EMOLOYEES = '/delete-employees';
const DELETE_ALL_MESSAGES = '/delete-messages';
const DELETE_ALL_ROLES = '/delete-roles';
const DELETE_ALL_SENDERS = '/delete-senders';

export default {
  GET_EMPLOYESS_BY_GROUP,
  GET_EMPLOYEES,
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
  UPDATE_ROLE,
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

  DELETE_ALL_CONTACTS,
  DELETE_ALL_EMOLOYEES,
  DELETE_ALL_ADMINS,
  DELETE_ALL_GROUPS,
  DELETE_ALL_MESSAGES,
  DELETE_ALL_ROLES,
  DELETE_ALL_SENDERS,
};
