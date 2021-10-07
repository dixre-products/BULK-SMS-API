/**
 * @api {POST} /login  login User
 * @apiName Login
 * @apiGroup User
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * @apiParam {String} phoneNumber users phone number.
 * @apiParam {String} password users account password.
 * @apiParam {String} countryCode two letter country code of user in uppercase e.g NG for Nigeria.
 *
 * @apiSuccess {String} statusText text description of the success status code.
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  users credentials object
 * @apiSuccess {String} payload.accessToken  user access token expires in 1 hour.
 * @apiSuccess {String} payload.refreshToken  user refresh token which is required to get new access tokens.
 * @apiSuccess {Object} payload.user object that contains all user props
 * @apiSuccess {String} payload.user.userId  The user Id.
 * @apiSuccess {String} payload.user.firstName  The user first name.
 * @apiSuccess {String} payload.user.lastName The user last name
 * @apiSuccess {String} payload.user.sex The sex of the user
 * @apiSuccess {String} payload.user.bio The biography of the user
 * @apiSuccess {String} payload.user.phoneNumber Users phone number in internation format
 * @apiSuccess {String} payload.user.localPhoneNumber users phone number in local format
 * @apiSuccess {String} payload.user.email The user email
 * @apiSuccess {Boolean} payload.user.showPhoneNumber privacy settings of user to show number or not
 * @apiSuccess {Boolean} payload.user.showEmail privacy setting setting of user to show bio or not
 * @apiSuccess {Object} payload.user.avatar Object of the profile photo of user
 * @apiSuccess {String} payload.user.avatar.thumbnail profile placeholder color or low resolution or quality of image
 * @apiSuccess {String} payload.user.avatar.url The user uploaded profile photo with high or normal resolution.
 * @apiSuccess {Object} payload.user.coverPhoto Object containing cover photo infomations
 * @apiSuccess {String} payload.user.coverPhoto.thumbnail cover photo placeholder or  color pallete
 * @apiSuccess {String} payload.user.coverPhoto.url The user uploaded cover photo
 * @apiSuccess {String} payload.user.address The address of the user by name
 * @apiSuccess {Object} payload.user.addressCoords Object containing address coordinates of the user
 * @apiSuccess {String} payload.user.addressCoords.type type of coordinate e.g Point
 * @apiSuccess {Number[]} payload.user.addressCoords.coordinates longitude and latitude of use e.g [longitude,latitude]
 * @apiSuccess {Object} payload.user.businessAddressCoords Object containing the business address coordinates of the user
 * @apiSuccess {String} payload.user.businessAddressCoords.type type of coordinate e.g Point
 * @apiSuccess {Number[]} payload.businessAddressCoords.coordinates longitude and latitude of use e.g [longitude,latitude]
 * @apiSuccess {String} payload.user.businessAddress user business address string
 * @apiSuccess {String} payload.user.businessAddressDescription user business address additional description
 * @apiSuccess {String[]} payload.user.businessPhotos user business photos
 * @apiSuccess {boolean} payload.user.isVerified specify if user is verified or not
 *
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "statusText": "SUCCESSFULL",
 *       "message": "LOGIN SUCCESS",
 *       "payload"{
 *           "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA4Mjc4MDF9.-Dq68jB_jjpMMucMAPt5uAqbJnZMQUlM58VeL1J6vq0",
 *           "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1ZlcmlmaWVkIjpmYWxzZSwiX2lkIjoiNjAwMzQ4MTkzZGE5YzRmODJmODVlNDQ1IiwiZW1haWwiOiIgIiwicGhvbmUiOiIrMjM0OTA1MDcwOTQ0NCIsInVzZXJJZCI6IjYwMDM0ODE5M2RhOWM0ZjgyZjg1ZTQ0NSIsInNhbHQiOiIkMmEkMTAkMGgwVEp3T3hBTEhhQWN0SzNrMHV4ZSIsImhhc2giOiIkMmEkMTAkMGgwVEp3T3hBTEhhQWN0SzNrMHV4ZXlWYmprYzg3NzJrMGpKQzdySFZETGV0V3o1UnV1ODIiLCJpYXQiOjE2MTA4Mjc4MDF9.a5x1yMlnrsAcy32it81SenaPDZdY-THwMXgfuuGDrAk",
 *         "user": {
 *           "firstName": "David",
 *           "lastName": "Moses",
 *           "sex": "Male",
 *           "bio": "Developer and lab scientist",
 *           "phoneNumber": "+23490200000002",
 *           "email": "example@gmail.com",
 *           "showPhoneNumber": true,
 *           "showEmail": false,
 *           "avatar": {
 *               "url":"https://url-image.com",
 *               "thumbnail":"https://url-image.com"
 *            },
 *           "coverPhoto": {
 *               "url":"https://url-image.com",
 *               "thumbnail":"https://url-image.com"
 *            },
 *           "address": "No 5 kaduna road apapa lagos state",
 *           "addressCoords": {
 *                "type"  : "Point"
 *                "coordinates" : [78.7373837,84.883838]
 *            },
 *
 *               "businessAddressCoords":  {
 *                "type"  : "Point"
 *                "coordinates" : [78.7373837,84.883838]
 *            },
 *
 *           "businessAddress": "No 49 avenue street apap",
 *           "businessAddressDescription": "Opposite Hamdala Swimming pool",
 *           "businessPhotos": ["https://me.to/photo1"]
 *           "isVerified": true,
 *           "localPhoneNumber": "8484848484848"
 *
 *                }
 *       }
 *     }
 *
 * @apiError Invalid login credential.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 403 Forbidden
 *     {
 *        "message": "describes reason for error",
 *        "error": "INVALID.LOGIN.CREDENTIALS"
 *     }
 *
 * @apiError UserNotVerified The user is not verified.
 * @apiErrorExample Account-Not-Verified:
 *     HTTP/1.1 409 Conflict
 *     {
 *        "error": "ACCOUNT.NOT.VERIFIED",
 *        "message": "describes reason for error"
 *     }
 *
 *
 * @apiError InvalidInput Invalid input parameters.
 * @apiErrorExample InvalidInput:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *        "error": "INVALID.PHONE | INVALID.INPUT",
 *        "message": "describes reason for error"
 *     }
 *
 * @apiError ServerError Internal server error.
 * @apiErrorExample Internal-Server-Error:
 *     HTTP/1.1 500 Internal server error
 *     {
 *        "error": "SERVER.ERROR",
 *        "mesage": "describes reason for error"
 *     }
 *
 *
 *
 * @apiError User Blocked.
 * @apiErrorExample User-Blocked:
 *     HTTP/1.1 403 FORBIDDEN
 *     {
 *        "error": "USER.SUSPENDED",
 *        "mesage": "describes reason for error"
 *     }
 *
 *
 *
 *
 *
 */
