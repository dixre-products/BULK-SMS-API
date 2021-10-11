import { Router } from 'express';
import ContactController from '../controllers/Contact';
import DepartmentController from '../controllers/Department';
import EmployeeController from '../controllers/Employee';
import RoleController from '../controllers/Role';
import MessageController from '../controllers/Messages';
//
import DepartmentValidation from '../Validators/Department';
import EmployeeValidation from '../Validators/Employee';
import RoleValidation from '../Validators/Role';

import constants from '../constants/index';
import HandleAsyncFactory from '../Middlewares/async.error.handler';

const {
  GET_ID_PARAM,
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
} = constants.RoutesSubs;
const admin = Router();

// Admin: Department Routes
admin.post(
  CREATE_DEPARTMENT,
  HandleAsyncFactory(DepartmentValidation.ValidateCreateDepartment),
  HandleAsyncFactory(DepartmentController.CreateDepartment),
);

admin.get(
  GET_DEPARTMENT,
  HandleAsyncFactory(DepartmentController.GetAllDepartment),
);
admin.put(
  UPDATE_DEPARTMENT,
  HandleAsyncFactory(DepartmentValidation.ValidateUpdateDepartment),
  HandleAsyncFactory(DepartmentController.UpdateDepartment),
);
admin.put(
  ADD_CREDIT,
  HandleAsyncFactory(
    DepartmentValidation.ValidateUpdateDepartmentCredit,
  ),
  HandleAsyncFactory(DepartmentController.UpdateDepartmentCredit),
);

// Admin: Contact Routes
admin.get(
  GET_CONTACT,
  HandleAsyncFactory(ContactController.GetAllContact),
);

// Admin: Message Routes

admin.get(
  GET_MESSAGE,
  HandleAsyncFactory(MessageController.GetAllMessages),
);

// Admin: Employee Routes

admin.post(
  CREATE_EMPLOYEE,
  HandleAsyncFactory(EmployeeValidation.ValidateCreateEmployee),
  HandleAsyncFactory(EmployeeController.CreateEmployee),
);

admin.put(
  UPDATE_EMPLOYEE,
  HandleAsyncFactory(EmployeeValidation.ValidateUpdateEmployee),
  HandleAsyncFactory(EmployeeController.UpdateEmployee),
);

admin.get(
  GET_EMPLOYEE,
  HandleAsyncFactory(EmployeeController.GetAllEmployee),
);

admin.put(
  UPDATE_EMPLOYEE_ROLE,
  HandleAsyncFactory(EmployeeValidation.ValidateAssignEmployeeToRole),
  HandleAsyncFactory(EmployeeController.AssignEmployeeToRole),
);

admin.put(
  UPDATE_EMPLOYEE_DEPARTMENT,
  HandleAsyncFactory(
    EmployeeValidation.ValidateAssignEmployeeToDepartment,
  ),
  HandleAsyncFactory(EmployeeController.AssignEmployeeToDepartment),
);

// Admin: Role Routes

admin.post(
  CREATE_ROLE,
  HandleAsyncFactory(RoleValidation.ValidateCreateRole),
  HandleAsyncFactory(RoleController.CreateRole),
);

admin.delete(
  DELETE_ROLE,
  HandleAsyncFactory(RoleValidation.ValidateDeleteRole),
  HandleAsyncFactory(RoleController.DeleteRole),
);

admin.get(
  GET_ROLE,
  //   HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(RoleController.GetAllRole),
);

admin.get(
  GET_ROLE + GET_ID_PARAM,
  HandleAsyncFactory(RoleValidation.ValidateGetSingleRole),
  HandleAsyncFactory(RoleController.GetSingleRole),
);

export default admin;