/**
 * @api {POST} /admin  Create an Admin
 * @apiName PostAdmin
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * @apiParam {String} email admin email address.
 * @apiParam {String} name admini name.
 * @apiParam {String} password admin password.
 *
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Object} payload  admin credentials object
 * @apiSuccess {String} payload._id admin ID.
 * @apiSuccess {String} payload.name admin name.
 * @apiSuccess {String} payload.email admin email address.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"{
 *          "_id": "6167ec5c549f4c75397eec44",
            "name": "Admin",
            "email": "admin@gmail.com",
 *       }
 *     }
 *
 * @apiError Password is required.
 * @apiErrorExample InvalidCredential:
 *     HTTP/1.1 400 Forbidden
 *     {
 *       "message": "Password is required",
         "error": "INVALID.INPUT"
 *     }
 *
 * @apiError email is required.
 * @apiErrorExample InvalidCredential
 *     HTTP/1.1 400 Conflict
 *     {
 *       "message": "email is required",
         "error": "INVALID.INPUT"
 *     }
 *
 * @apiError password is required.
 * @apiErrorExample InvalidCredential
 *     HTTP/1.1 400 Conflict
 *     {
 *       "message": "password is required",
         "error": "INVALID.INPUT"
 *     }
 *
 * 
 * 
 *
 *
 *
 */
