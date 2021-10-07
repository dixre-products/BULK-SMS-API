/**
 * @api {PUT} /profile/  Update profile
 * @apiName ProfileUpdate
 * @apiGroup Profile
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer <<Access Token Here without symbol please>>"
 *     }
 *
 *
 * @apiParam {String} userId id of the user to be updated
 * @apiParam {Object} updates object that contains updates to be applied.
 * @apiParam {String} [updates.firstName]  The user first name.
 * @apiParam {String} [updates.lastName] The user last name
 * @apiParam {String} [updates.bio] The biography of the user
 * @apiParam {Boolean} [updates.showPhoneNumber] privacy settings of user to show number or not
 * @apiParam {Boolean} [updates.showEmail] privacy setting setting of user to show bio or not
 * @apiParam {Object} [updates.avatar] profile photo of user
 * @apiParam {String} updates.avatar.thumbnail profile placeholder color
 * @apiParam {String} updates.avatar.url The user uploaded profile photo
 * @apiParam {Object} [updates.coverPhoto] The cover photo of the user
 * @apiParam {String} updates.coverPhoto.thumbnail cover photo placeholder color
 * @apiParam {String} updates.coverPhoto.url The user uploaded cover photo
 * @apiParam {String} [updates.address] The address of the user by name
 * @apiParam {Object} [updates.addressCoords] The cordinates of the user address in longitude and latitude
 * @apiParam {Number[]} updates.addressCoords.coordinates longitude and latitude of use e.g [longitude,latitude]
 * @apiParam {Object} [updates.businessAddressCoords] The user business Coordinates in latitude and longitude
 * @apiParam {Number[]} updates.businessAddressCoords.coordinates longitude and latitude of use e.g [longitude,latitude]
 * @apiParam {String} [updates.businessAddress] user business address string
 * @apiParam {String} [updates.businessAddressDescription] user business address additional description
 * @apiParam {String[]} [updates.businessPhotos] user business photos
 *
 *
 * @apiSuccess {String} message status message text
 * @apiSuccess {Object} payload object that contains all user propeties
 * @apiSuccess {String} payload.userId  The user Id.
 * @apiSuccess {String} payload.firstName  The user first name.
 * @apiSuccess {String} payload.lastName The user last name
 * @apiSuccess {String} payload.sex The sex of the user
 * @apiSuccess {String} payload.bio The biography of the user
 * @apiSuccess {String} payload.phoneNumber The users phone number in international format
 * @apiSuccess {String} payload.localPhoneNumber Show user local phone number in local format
 * @apiSuccess {String} payload.email The user email
 * @apiSuccess {Boolean} payload.showPhoneNumber privacy settings of user to show number or not
 * @apiSuccess {Boolean} payload.showEmail privacy setting setting of user to show bio or not
 * @apiSuccess {Object} payload.avatar profile photo of user
 * @apiSuccess {String} payload.avatar.thumbnail profile placeholder color
 * @apiSuccess {String} payload.avatar.url The user uploaded profile photo
 * @apiSuccess {Object} payload.coverPhoto The cover photo of the user
 * @apiSuccess {String} payload.coverPhoto.thumbnail cover photo placeholder color
 * @apiSuccess {String} payload.coverPhoto.url The user uploaded cover photo
 * @apiSuccess {String} payload.address The address of the user by name
 * @apiSuccess {Object} updates.addressCoords The cordinates of the user address in longitude and latitude
 * @apiSuccess {String} payload.addressCoords.type type of coordinate e.g Point
 * @apiSuccess {Number[]} payload.addressCoords.coordinates longitude and latitude of use e.g [longitude,latitude]
 * @apiSuccess {Object} updates.businessAddressCoords The user business Coordinates in latitude and longitude
 * @apiSuccess {String} payload.businessAddressCoords.type  type of coordinate e.g Point
 * @apiSuccess {Number[]} payload.businessAddressCoords.coordinates longitude and latitude of use e.g [longitude,latitude]
 * @apiSuccess {String} payload.businessAddress user business address string
 * @apiSuccess {String} payload.businessAddressDescription user business address additional description
 * @apiSuccess {String[]} payload.businessPhotos user business photos
 * @apiSuccess {boolean} isVerified specify if user is verified or not
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFUL",
 *       "payload": {
 *              "userId": "kdkf499949dk9e9w9wj39djdjj",
 *              "firstName": "David",
 *              "lastName": "Moses",
 *              "sex": "Male",
 *              "bio": "Developer and lab scientist",
 *              "phoneNumber": "+23490200000002",
 *              "email": "example@gmail.com",
 *              "showPhoneNumber": true,
 *              "showEmail": false,
 *              "avatar": {
 *                  "url":"https://url-image.com",
 *                  "thumbnail":"https://url-image.com"
 *               },
 *              "coverPhoto": {
 *                  "url":"https://url-image.com",
 *                  "thumbnail":"https://url-image.com"
 *               },
 *              "address": "No 5 kaduna road apapa lagos state",
 *              "addressCoords": {
 *                   "type"  : "Point"
 *                   "coordinates" : [78.7373837,84.883838]
 *               },
 *
 *                     "businessAddressCoords":  {
 *                   "type"  : "Point"
 *                   "coordinates" : [78.7373837,84.883838]
 *               },
 *
 *                     "businessAddress": "No 49 avenue street apap",
 *              "businessAddressDescription": "Opposite Hamdala Swimming pool",
 *              "businessPhotos": ["https://me.to/photo1"];
 *
 *                  }
 *     }
 *
 * @apiError InvalidInput Invalid input parameters.
 * @apiErrorExample InvalidInput:
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "error": "INVALID.INPUT",
 *        "message": "describes error"
 *     }
 *
 * @apiError ServerError Internal server error.
 * @apiErrorExample Internal-Server-Error:
 *     HTTP/1.1 500 Internal server error
 *     {
 *        "error": "SERVER.ERROR",
 *        "mesage": "describes error"
 *     }
 *
 * @apiError UserNotFound User/userId does not exist.
 * @apiErrorExample Not-Found-Error:
 *     HTTP/1.1 404 NOT FOUND
 *     {
 *        "error": "USER.NOT.FOUND",
 *        "mesage": "describes error"
 *     }
 *
 * @apiError UserUnauthorized The user is not unauthorized.
 * @apiErrorExample UnAuthorized:
 *     HTTP/1.1 401 Unauthorized request
 *     {
 *        "message": "describes reason for error",
 *        "error": "UNAUTHORIZED.REQUEST"
 *     }
 *
 *
 *
 */
