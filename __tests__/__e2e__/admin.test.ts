import superTest from 'supertest';
import DatabaseConnection from '../../src/utills/connection';
import app from '../../src/index';
/*
   Test 1 => Admin should successfully create an account
   Test 2 => Admin should not be able to create an account if required field is no provided
   Test 4 => should be able to get a single account by ID
   Test 5 => should fail if params is incorrect
   Test 6 => Admin should be able to update an account
   Test 7 => Admin should not be able to update if ID is not provided

*/
// login Test Account Creadentials
let newAdmin = {
  name: 'test',
  email: 'abc@gmail.com',
  password: 'aaaa',
};

let updates = {
  name: 'testupdate',
  email: 'def@gmail.com',
  password: 'bbb',
};

const SuperTest = superTest(app);

beforeAll(async () => {
  try {
    await DatabaseConnection.dropCollection('admins');
  } catch (e) {
    //
  }
});

describe('Admin Test', () => {
  let newPostId = '';
  let incorrectId = '6166360199c49afae4f22712';

  test('Admin should successfully create an account', async (done) => {
    SuperTest.post('/admin')
      .send(newAdmin)
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
        done(e);
      });
  });

  test(' Admin should not be able to create an account if required field is no provided', async (done) => {
    SuperTest.post('/admin/create-department')
      .send({ name: '', email: '', password: '' })
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

  test('should be able to get a single account by ID', async (done) => {
    SuperTest.get('/admin/' + newPostId)
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
    SuperTest.get('/admin/' + incorrectId)
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

  test(' Admin should be able to update an account', async (done) => {
    SuperTest.put('/admin/')
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

  test('Admin should not be able to update if ID is not provided', async (done) => {
    SuperTest.put('/admin')
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
});