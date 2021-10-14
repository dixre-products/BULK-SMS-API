import superTest from 'supertest';
import DatabaseConnection from '../../src/utills/connection';
import app from '../../src/index';
import models from '../../src/models';
import { DepartmentProps } from '../../src/Types/interfaces';
/*

   Test 1 => Admin should successfully create an employee
   Test 2 => Admin should not be abe to create an employee if required field is not given
   Test 3 => Admin should be able to get all  employee
   Test 4 => should be able to get a single employee
   Test 5 => should fail if params is incorrect
   Test 6 => Admin should be able to update an employee
   Test 7 => Admin should not be able to update if employee ID is not provided / empty
   Test 8 => Admin should not be able to update if an employee ID is incorrect


   Test 9 => Admin should  be able to assign an employee to a department
   Test 9.1 => should fail if the employee id is not valid
   Test 9.2 => should fail if the department id is not valid

   Test 10=> Admin should  be able to assign an employee to a role
   Test 10.2 => should fail if the role id is not valid
*/
// login Test Account Creadentials
let newEmployee = {
  name: 'aaaaaa',
  password: '12345',
  email: 'aaaaaa@gmailcom',
  address: 'bbbbb',
};

let updates = {
  name: 'bbbbbb',
  password: '12345',
  email: 'bbbbbb@gmailcom',
  address: 'bbbbb',
};

const SuperTest = superTest(app);
let newEmployeeId = '';
let incorrectId = '6166360199c49afae4f22712';
let newDepartmentId: any;
let newRoleId: any;
beforeAll(async () => {
  try {
    await DatabaseConnection.dropCollection('employees');
    const department = new models.Department({
      name: 'deptX',
      credit: 13,
    }) as DepartmentProps;
    await department.save();
    newDepartmentId = department._id;

    const role = new models.Role({
      sendMessage: true,
      readMessage: true,
      addContact: true,
      name: 'maker',
    });
    await role.save();

    newRoleId = role._id;
  } catch (e) {}
});
afterAll(async () => {
  try {
    await DatabaseConnection.dropCollection('departments');
    await DatabaseConnection.dropCollection('roles');
  } catch (e) {}
});

describe('Employee Test', () => {
  test('Admin should successfully create an employee', async (done) => {
    SuperTest.post('/admin/create-employee')
      .send({
        ...newEmployee,
        groupId: newDepartmentId,
        roleId: newRoleId,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { message, payload } = response.body;
        newEmployeeId = payload._id;

        expect(message).toBeDefined();
        expect(typeof payload).toBe('object');
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test(' Admin should not be abe to create an employee if required field is not given or empty', async (done) => {
    SuperTest.post('/admin/create-employee')
      .send({ ...newEmployee, name: '', email: '' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        const { message } = response.body;
        expect(message).toBeDefined();
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('Admin should be able to get all  employee', async (done) => {
    SuperTest.get('/admin/get-employee')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { message, payload } = response.body;
        expect(message).toBeDefined();
        expect(typeof payload).toBe('object');

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test(' should be able to get a single employee', async (done) => {
    SuperTest.get('/employee/' + newEmployeeId)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { message, payload } = response.body;
        expect(message).toBeDefined();
        expect(typeof payload).toBe('object');

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('should fail if params is incorrect', async (done) => {
    SuperTest.get('/employee/6166360199c49afae4f22712')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .then((response) => {
        const { message } = response.body;

        expect(message).toBeDefined();
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test(' Admin should be able to update a employee', async (done) => {
    SuperTest.put('/admin/update-employee/')
      .send({ id: newEmployeeId, updates })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { message, payload } = response.body;

        expect(message).toBeDefined();
        expect(typeof payload).toBe('object');

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('Admin should not be able to update if employee ID is not provided / empty', async (done) => {
    SuperTest.put('/admin/update-employee/')
      .send({ id: '', updates })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        const { message } = response.body;

        expect(message).toBeDefined();

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test(' Admin should not be able to update if employee ID is incorrect', async (done) => {
    SuperTest.put('/admin/update-employee/')
      .send({ id: '6166360199c49afae4f22714', updates })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .then((response) => {
        const { message } = response.body;

        expect(message).toBeDefined();

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test(' Admin should  be able to assign an employee to a department', async (done) => {
    SuperTest.put('/admin/update-employee-department')
      .send({
        employeeId: newEmployeeId,
        departmentId: newDepartmentId,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { message, payload } = response.body;

        expect(message).toBeDefined();
        expect(typeof payload).toBe('object');

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('should fail if the employee id is not valid', async (done) => {
    SuperTest.put('/admin/update-employee-department')
      .send({
        employeeId: incorrectId,
        departmentId: newDepartmentId,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .then((response) => {
        const { message } = response.body;

        expect(message).toBeDefined();

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('should fail if the department id is not valid', async (done) => {
    SuperTest.put('/admin/update-employee-department')
      .send({
        employeeId: newEmployeeId,
        departmentId: incorrectId,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .then((response) => {
        const { message } = response.body;

        expect(message).toBeDefined();

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test(' Admin should  be able to assign an employee to a role', async (done) => {
    SuperTest.put('/admin/update-employee-role')
      .send({
        employeeId: newEmployeeId,
        roleId: newRoleId,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { message, payload } = response.body;

        expect(message).toBeDefined();
        expect(typeof payload).toBe('object');

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('should fail if the role id is not valid', async (done) => {
    SuperTest.put('/admin/update-employee-role')
      .send({
        employeeId: incorrectId,
        roleId: incorrectId,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .then((response) => {
        const { message } = response.body;

        expect(message).toBeDefined();

        done();
      })
      .catch((e) => {
        done(e);
      });
  });
});