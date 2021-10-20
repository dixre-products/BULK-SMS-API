/**
 * @api {GET} /admin/  Get all Admin
 * @apiName GetAllAdmin
 * @apiGroup Admin
 * @apiVersion  1.0.0
 * @apiSampleRequest off
 *
 * 
 * 
 * @apiSuccess {String} message  describes the success of the action performed.
 * @apiSuccess {Array} array Array of admin object from collection
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Successful
 *     {
 *       "message": "SUCCESSFULL",
 *       "payload"[
   *        {
   *          "_id": "6167ec5c549f4c75397eec44",
               "name": "Admin",
               "email": "admin@gmail.com",
   *        },
            {
   *          "_id": "6167ec5c549f4c75397eec44",
               "name": "Admin",
               "email": "admin@gmail.com",
   *        }
         ]
 *     }
 *
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
 *
 */
