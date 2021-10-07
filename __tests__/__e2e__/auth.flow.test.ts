/*************************
 *
 *    TESTING EXECUTION FLOW OF HANWOK AUTHENTICATION SERVICE (TEST GOALS)
 *    =================================================
 *
 *   Test 1 => Users should be able to signup successfully
 *
 *   Test 2 => Users Should not be able to Login if User tries to login without verifying Account
 *
 *   Test 3 => The User Should get a token and pin when verify/call or verify/sms endpoint is called on test Mode which does not send  pin on production mode rather a sms to User or call.
 *        i) Should not allow user to request for verification code within certain time frame.
 *
 *   Test 4 => Should fail if pin does not match the pin sent to the phone number in question;
 *
 *   Test 5 => User should get a access and refresh token when verification pin is ok
 *        i*) should cancel pin if max trials is exceeded which is 3
 *
 *   Test 6 => User should get a access and refresh token when login from a verified account
 *
 *   Test 7 => User should not be able to signup with a verified account
 *
 *   Test 8 => User should not be able to get profile information without access token pass to request header
 *
 *   Test 9 => Users should not be able to update profile or get profile informations if access token is not passed to request header or is invalid or expired
 *
 *   Test 10 => User should be able to update profile with valid access token on request header
 *
 *
 *   Test 11 => Should suspend user if user credentials is wrong for login in 3 consecutive times within certain time interval
 *
 *   Test 12 => Should be able to get accessToken if refresh token is correct i.e if accessToken expires
 *       i) Should not get accessToken if refresh token is invalid or not defined
 *
 *   Test 13 => Should be able to resset password if accessToken sent after pin verification is valid
 *      i) Should not resset password if token is invalid or accessToken is not sent
 *
 * ****************************** */

import superTest from 'supertest';
import DatabaseConnection from '../../src/utills/connection';
import app from '../../src/index';

// login Test Account Creadentials
let user = {
  phoneNumber: '09050709444',
  countryCode: 'NG',
  password: 'Ss4solex',
};

let $user = {
  phoneNumber: '09050709444',
  countryCode: 'NG',
  password: 'Ss4solex',
  firstName: 'Solomon',
  lastName: 'Yunana',
  sex: 'male',
};

const SuperTest = superTest(app);

beforeAll(async () => {
  try {
    await DatabaseConnection.dropCollection('users');
    await DatabaseConnection.dropCollection('verifications');
  } catch (e) {
    //
  }
});

describe('Verifying Hanwok Authentication Service e2e test... ', () => {
  // Test global variables
  let token: string;
  let pin: string;
  let accessToken: string;
  let refreshToken: string;
  let userId: string;

  test('Should signup / register user successfully', async (done) => {
    SuperTest.post('/SignUp')
      .send($user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { message, payload } = response.body;
        expect(message).toBeDefined();
        expect(typeof payload).toBe('object');
        expect(payload.userId).toBeDefined();
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('Users Should not be able to Login if User tries to login without verifying Account', async (done) => {
    SuperTest.post('/login')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(409)
      .then(() => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('The User Should get a token and pin when verify/call or verify/sms endpoint is called on test Mode which does not send  pin on production mode rather a sms to User or call.', async (done) => {
    SuperTest.post('/verify/sms')
      .send({
        phoneNumber: user.phoneNumber,
        countryCode: user.countryCode,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { payload } = response.body;
        expect(payload.token).toBeDefined();
        expect(payload.pin).toBeDefined();
        token = payload.token;
        pin = payload.pin;
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('Should not allow user to request for verification code within certain time frame after previous request.', async (done) => {
    SuperTest.post('/verify/sms')
      .send({
        phoneNumber: user.phoneNumber,
        countryCode: user.countryCode,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(403)
      .then(() => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('Should fail if pin does not match the pin sent to the phone number in question.', async (done) => {
    SuperTest.post('/verify/code')
      .send({
        pin: '1111',
        token,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .then(() => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('User should get a access and refresh token when verification pin is ok.', async (done) => {
    SuperTest.post('/verify/code')
      .send({
        pin,
        token,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { payload } = response.body;
        expect(payload.accessToken).toBeDefined();
        expect(payload.refreshToken).toBeDefined();
        accessToken = payload.accessToken;
        refreshToken = payload.refreshToken;
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('User should get a access and refresh token when login from a verified account.', async (done) => {
    SuperTest.post('/login')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { payload } = response.body;
        expect(payload.accessToken).toBeDefined();
        expect(payload.refreshToken).toBeDefined();
        expect(typeof payload.user).toBe('object');
        userId = payload.user.userId;
        accessToken = payload.accessToken;
        refreshToken = payload.refreshToken;

        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('User should not be able to signup with a verified account', async (done) => {
    SuperTest.post('/SignUp')
      .send($user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(409)
      .then(() => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('User should not be able to signup with a verified account', async (done) => {
    SuperTest.get('/profile/' + userId)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .then(() => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('User should not be able to get profile information without access token pass to request header', async (done) => {
    SuperTest.get('/profile/' + userId)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { payload } = response.body;
        expect(payload.userId).toBeDefined();
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('Users should not be able to update profile or get profile informations if access token is not passed to request header or is invalid or expired', async (done) => {
    SuperTest.put('/profile/')
      .send({
        userId: userId,
        updates: {
          firstName: 'Solex',
          lastName: 'Yunax',
          businessAddressCoords: [78.7373837, 84.883838],
          addressCoords: [78.7373837, 84.883838],
        },
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .then((response) => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('User should be able to update profile with valid access token on request header', async (done) => {
    SuperTest.put('/profile')
      .send({
        userId: userId,
        updates: {
          firstName: 'Solex',
          lastName: 'Yunax',
          businessAddressCoords: {
            coordinates: [78.7373837, 84.883838],
          },
          addressCoords: {
            coordinates: [78.7373837, 84.883838],
          },
        },
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { payload } = response.body;
        expect(payload.userId).toBeDefined();
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('Should be able to get accessToken if refresh token is correct i.e if accessToken expires', async (done) => {
    SuperTest.post('/token/refresh')
      .send({
        refreshToken: refreshToken + 'dkdkdkdkdk',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(403)
      .then(() => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('Should be able to get accessToken if refresh token is correct i.e if accessToken expires', async (done) => {
    SuperTest.post('/token/refresh')
      .send({
        refreshToken,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { payload } = response.body;
        expect(payload.accessToken).toBeDefined();
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  // Testing ressting of password

  test('should  Change user password successfully.', async (done) => {
    SuperTest.post('/reset-password')
      .send({
        password: 'solexsolexsolex',
        accessToken,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('should not change password due to bad access token', async (done) => {
    SuperTest.post('/reset-password')
      .send({
        password: 'solexsolexsolex',
        accessToken: accessToken + 'dkdkdkdkdk',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .then(() => {
        done();
      })
      .catch((e) => {
        done(e);
      });
  });

  test('should Confirm password change.', async (done) => {
    SuperTest.post('/login')
      .send({
        phoneNumber: user.phoneNumber,
        password: 'solexsolexsolex',
        countryCode: user.countryCode,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { payload } = response.body;
        expect(payload.accessToken).toBeDefined();
        expect(payload.refreshToken).toBeDefined();
        expect(typeof payload.user).toBe('object');
        accessToken = payload.accessToken;
        refreshToken = payload.refreshToken;

        done();
      })
      .catch((e) => {
        done(e);
      });
  });
});
