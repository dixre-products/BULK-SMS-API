import { Router } from 'express';
import ContactController from '../controllers/Contact';
import DepartmentController from '../controllers/Department';
import EmployeeController from '../controllers/Employee';
import ReportController from '../controllers/Report';
import RoleController from '../controllers/Role';
import SenderController from '../controllers/SenderIDs';
import MessageController from '../controllers/Messages';
import AdminController from '../controllers/Admin';
import GetValidation from '../Validators/Get.Requests/index';
import DepartmentValidation from '../Validators/Department';
import EmployeeValidation from '../Validators/Employee';
import RoleValidation from '../Validators/Role';
import AdminValidation from '../Validators/Admin';
import LoginAccount from '../controllers/Auth/login';
import LoginValidation from '../Validators/Auth/index';
import ProtectAdminRoute from '../Middlewares/admin.protected.routes';
import SenderValidation from '../Validators/SenderId';
import ReportValidation from '../Validators/Report';
import ActivitiesValidator from '../Validators/Activities/get.activities.validation';
import Activities from '../controllers/Activities';

// import GetRequestValidation from '../Validators/Get.Requests';

import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const {
  UPDATE_ROLE,
  BASE_SUB,
  GET_ID_PARAM,
  CREATE_DEPARTMENT,
  GET_DEPARTMENT,
  UPDATE_DEPARTMENT,
  ADD_CREDIT,
  GET_CONTACT,
  GET_MESSAGE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_ROLE,
  UPDATE_EMPLOYEE_DEPARTMENT,
  CREATE_ROLE,
  GET_ROLE,
  DELETE_ROLE,

  DELETE_MULTIPLE_ADMINS,
  DELETE_MULTIPLE_SENDERS,
  DELETE_MULTIPLE_GROUPS,
  DELETE_MULTIPLE_EMOLOYEES,
  DELETE_MULTIPLE_ROLES,

  DELETE_REPORT,
  DELETE_MULTIPLE_REPORTS,
  GET_REPORT,

  ACTIVITIES,
} = constants.RoutesSubs;

const { LOGIN_BASE } = constants.RouteBase;
const admin = Router();

// Activities
admin.get(
  ACTIVITIES,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(GetValidation),
  HandleAsyncFactory(Activities.GetAllActivity),
);

// Activities
admin.delete(
  ACTIVITIES,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(ActivitiesValidator),
  HandleAsyncFactory(Activities.DeleteMulitipleActivity),
);

admin.post(
  LOGIN_BASE,
  HandleAsyncFactory(LoginValidation.LoginAdmin),
  HandleAsyncFactory(LoginAccount),
);

// Admin: Department Routes
admin.post(
  CREATE_DEPARTMENT,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(DepartmentValidation.ValidateCreateDepartment),
  HandleAsyncFactory(DepartmentController.CreateDepartment),
);

admin.get(
  GET_DEPARTMENT,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(GetValidation),
  HandleAsyncFactory(DepartmentController.GetAllDepartment),
);
admin.put(
  UPDATE_DEPARTMENT,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(DepartmentValidation.ValidateUpdateDepartment),
  HandleAsyncFactory(DepartmentController.UpdateDepartment),
);
admin.put(
  ADD_CREDIT,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(
    DepartmentValidation.ValidateUpdateDepartmentCredit,
  ),
  HandleAsyncFactory(DepartmentController.UpdateDepartmentCredit),
);

admin.delete(
  DELETE_MULTIPLE_GROUPS,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(DepartmentValidation.ValidateDeleteDepartment),
  HandleAsyncFactory(DepartmentController.DeleteMultipleDepartment),
);

// Admin: Contact Routes
admin.get(
  GET_CONTACT,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(GetValidation),
  HandleAsyncFactory(ContactController.GetAllContact),
);

// Admin: Message Routes

admin.get(
  GET_MESSAGE,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(GetValidation),

  HandleAsyncFactory(MessageController.GetAllMessages),
);

// Admin: Employee Routes
admin.delete(
  DELETE_MULTIPLE_EMOLOYEES,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(EmployeeValidation.ValidateDeleteEmployee),
  HandleAsyncFactory(EmployeeController.DeleteMultipleEmployee),
);

admin.post(
  CREATE_EMPLOYEE,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(EmployeeValidation.ValidateCreateEmployee),
  HandleAsyncFactory(EmployeeController.CreateEmployee),
);

admin.put(
  UPDATE_EMPLOYEE,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(EmployeeValidation.ValidateUpdateEmployee),
  HandleAsyncFactory(EmployeeController.UpdateEmployee),
);

admin.get(
  GET_EMPLOYEES,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(GetValidation),
  HandleAsyncFactory(EmployeeController.GetAllEmployee),
);

admin.put(
  UPDATE_EMPLOYEE_ROLE,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(EmployeeValidation.ValidateAssignEmployeeToRole),
  HandleAsyncFactory(EmployeeController.AssignEmployeeToRole),
);

admin.put(
  UPDATE_EMPLOYEE_DEPARTMENT,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(
    EmployeeValidation.ValidateAssignEmployeeToDepartment,
  ),
  HandleAsyncFactory(EmployeeController.AssignEmployeeToDepartment),
);

// Admin: Role Routes //

admin.delete(
  DELETE_ROLE + GET_ID_PARAM,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(RoleValidation.ValidateDeleteRole),
  HandleAsyncFactory(RoleController.DeleteRole),
);

admin.delete(
  DELETE_MULTIPLE_ROLES,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(RoleValidation.ValidateDeleteMultipleRole),
  HandleAsyncFactory(RoleController.DeleteMultipleRole),
);

admin.post(
  CREATE_ROLE,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(RoleValidation.ValidateCreateRole),
  HandleAsyncFactory(RoleController.CreateRole),
);

admin.put(
  UPDATE_ROLE,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(RoleValidation.ValidateUpdateRole),
  HandleAsyncFactory(RoleController.UpdateRole),
);

admin.get(
  GET_ROLE,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(GetValidation),

  HandleAsyncFactory(RoleController.GetAllRole),
);

admin.get(
  GET_ROLE + GET_ID_PARAM,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(RoleValidation.ValidateGetSingleRole),
  HandleAsyncFactory(RoleController.GetSingleRole),
);

// Reports

admin.get(
  GET_REPORT,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(GetValidation),
  HandleAsyncFactory(ReportController.GetAllReport),
);

admin.delete(
  DELETE_REPORT + GET_ID_PARAM,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(ReportValidation.ValidateDeleteReport),
  HandleAsyncFactory(ReportController.DeleteReport),
);

admin.delete(
  DELETE_MULTIPLE_REPORTS,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(ReportValidation.ValidateMultipleDeleteReports),
  HandleAsyncFactory(ReportController.DeleteMultipleReports),
);

// Admin Route
admin.post(
  BASE_SUB,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(AdminValidation.ValidateCreateAdmin),
  HandleAsyncFactory(AdminController.CreateAdmin),
);

admin.delete(
  DELETE_MULTIPLE_ADMINS,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(AdminValidation.ValidateDeleteAdmin),
  HandleAsyncFactory(AdminController.DeleteMultipleAdmin),
);

admin.get(
  GET_ID_PARAM,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(AdminValidation.ValidateGetSingleAdmin),
  HandleAsyncFactory(AdminController.GetSingleAdmin),
);
admin.get(
  BASE_SUB,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(GetValidation),
  HandleAsyncFactory(AdminController.GetAllAdmin),
);

admin.put(
  BASE_SUB,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(AdminValidation.ValidateUpdateAdmin),
  HandleAsyncFactory(AdminController.UpdateAdmin),
);

// Sender

admin.delete(
  DELETE_MULTIPLE_SENDERS,
  HandleAsyncFactory(ProtectAdminRoute),
  HandleAsyncFactory(SenderValidation.ValidateDeleteMultipleSender),
  HandleAsyncFactory(SenderController.DeleteMultipleSenders),
);

export default admin;
