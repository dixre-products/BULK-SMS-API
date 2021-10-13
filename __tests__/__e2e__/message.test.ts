import superTest from 'supertest';
import DatabaseConnection from '../../src/utills/connection';
import app from '../../src/index';
import { DepartmentProps } from '../../src/Types/interfaces';
import models from '../../src/models';
/*
   Test 1 => it should successfully create a messsage
   Test 2 => it should fail to create message if required field is not given
   Test 3 => Admin should be able to get all messages
   Test 4 => should be able to get a single message  Department ID
   Test 5 => should fail if params is incorrect
   
   Test 6 => it should be able to update a message
   Test 7 => it should not be able to update if message ID is not provided / empty
   Test 8 => it should not be able to update if message ID is incorrect
   Test 9 => should be able to delete a contact with correct ID
*/

let updates = {
  contacts: [1111, 11111, 11111, 1111],
  message: 'bbbb',
  sender: 'bbbb',
  time: Date.now(),
  status: 'pending',
};

const SuperTest = superTest(app);

let incorrectId = '6166360199c49afae4f22712';
var newDepartmentId: any;
beforeAll(async () => {
  try {
    await DatabaseConnection.dropCollection('messages');
    const department = new models.Department({
      name: 'deptX',
      credit: 13,
    }) as DepartmentProps;
    await department.save();
    newDepartmentId = department._id;
  } catch (e) {}
});

let newMessage = {
  contacts: [2314343, 1333134, 41141, 141],
  message: 'asasasas',
  sender: 'sassss',
  time: Date.now(),
  status: 'approved',
  groupId: newDepartmentId,
};

afterAll(async () => {
  try {
    await DatabaseConnection.dropCollection('departments');
  } catch (e) {
    // console.log(e);
  }
});
describe('Message Test', () => {
  let newPostId = '';
  test('it should successfully create a message', async (done) => {
    SuperTest.post('/message')
      .send(newMessage)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { message, payload } = response.body;
        newPostId = payload._id;
        expect(message).toBeDefined();
        expect(typeof payload).toBe('object');
        done();
      })
      .catch((e) => {
        // console.log(e);

        done(e);
      });
  });

  test('it should fail to create message if required field is not given', async (done) => {
    SuperTest.post('/message')
      .send({ ...newMessage, message: '', sender: '' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        const { message, payload } = response.body;
        expect(message).toBeDefined();
        done();
      })
      .catch((e) => {
        // console.log(e);

        done(e);
      });
  });

  test(' Admin should be able to get all messages', async (done) => {
    SuperTest.get('/admin/get-message')
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

  // test('should be able to get a single message by Department ID', async (done) => {
  //   SuperTest.get('/message/' + newMessage)
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then((response) => {
  //       console.log('departmentID', newDepartmentId);

  //       const { message, payload } = response.body;
  //       expect(message).toBeDefined();
  //       expect(typeof payload).toBe('object');
  //       done();
  //     })
  //     .catch((e) => {
  //       console.log(e);

  //       done(e);
  //     });
  // });

  test('should fail if params is incorrect', async (done) => {
    SuperTest.get('/message/' + incorrectId)
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

  test(' it should be able to update a message', async (done) => {
    SuperTest.put('/message')
      .send({ id: newPostId, updates })
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

  test('it should not be able to update if message ID is not provided / empty', async (done) => {
    SuperTest.put('/message')
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

  test(' should fail to update if message ID is incorrect', async (done) => {
    SuperTest.put('/message')
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

  test('should be able to delete a contact with correct ID', async (done) => {
    SuperTest.delete('/message/' + newPostId)
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
});
